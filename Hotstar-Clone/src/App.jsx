import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import SignUp from './pages/SignUpPage/SignUp';
import MySpace from './pages/MySpace/MySpace';
import Player from './pages/PlayerPage/Player';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        if (location.pathname === '/login' || location.pathname === '/signup') {
          navigate('/');
        }
      } else {
        if (location.pathname !== '/login' && location.pathname !== '/signup') {
          navigate('/login');
        }
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate, location]);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/myspace' element={user ? <HomePage /> : <MySpace />} />
      <Route path='/player/:id' element={<Player />} />
    </Routes>
  );
}

export default App;

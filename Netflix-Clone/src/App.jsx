import React from 'react'
import HomePage from './pages/Home/HomePage'
import { Route,Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import ForgotPass from './pages/ForgetPassword/ForgotPass'
import VideoPlayer from './pages/VideoPlayer/VideoPlayer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        navigate('/');
      }else{
        navigate('/login');
      }
    });
  }, []);

  return (
    <div>
        <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/forget-password' element={<ForgotPass/>} />
        <Route path='/player/:id' element={<VideoPlayer/>} />
      </Routes>
      
    </div>
  )
}

export default App
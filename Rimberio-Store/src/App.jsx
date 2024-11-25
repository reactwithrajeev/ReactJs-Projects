import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CartProvider from "./store/cartContext";
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder';
// import SearchBar from "./components/SearchBar/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartProvider>
        <ToastContainer/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/place-order" element={<PlaceOrder/>}/>
        </Route>
      </Routes>
    </CartProvider>
  );
};

export default App;

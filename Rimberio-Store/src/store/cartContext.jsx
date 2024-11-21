import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { id } = useParams();
  const product = products.find((item) => item._id === id);
  const [cart, setCart] = useState([]);

  const addToCarthandler = () => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Product added to cart:", product);
  };
  console.log("Products Array:", products);
  console.log("ID from Params:", id);
  console.log("Product Matched:", product);

  return (
    <CartContext.Provider value={{ cart, setCart, product, addToCarthandler }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { useContext, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {ShopContext} from '../store/shopContext'
import { useParams } from "react-router-dom";


const Product = () => {
  const {products} = useContext(ShopContext)
  let {productId}= useParams()
  let showProduct = products.find((item)=> item._id===productId);
  useEffect(()=>{
    console.log(productId)
  })
  

  if (!showProduct) {
    return <p>Product not found</p>;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full p-10 flex items-center justify-center gap-3">
        <div className="w-[40%] h-full flex gap-4">
          <div className="w-[25%] h-full">
            {showProduct.image?.map((image, index) => (
              <img key={index} src={image} className="mb-2 h-[110px]" />
            ))}
          </div>
          <div className="w-[75%]">
            <img src={showProduct.image?.[0]} />
          </div>
        </div>
        <div className="w-[40%] flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">{showProduct.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex text-orange-500 gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>(122)</p>
          </div>
          <h1 className="text-3xl font-semibold">₹ {showProduct.price}</h1>
          <p>{showProduct.description}</p>
          <h5 className="font-semibold">Select Size</h5>
          <div className="flex gap-4">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="p-2 border-2 border-black w-[55px] rounded-lg"
              >
                {size}
              </button>
            ))}
          </div>
          <button
            className="border w-[150px] p-5 bg-black text-white cursor-pointer"
          >
            ADD TO CART
          </button>
          <div className="flex flex-col gap-3 border-t-2 pt-4">
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Description</h1>
        <p className="mt-3 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum quia
          tempore odio voluptates temporibus aspernatur totam neque illum,
          magni minus officia corporis!
        </p>
        <p className="mt-3 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          esse perspiciatis magni cumque deserunt nobis!
        </p>
      </div>
    </div>
  );
};

export default Product;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../store/shopContext";
import "../App.css";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProduct from "../components/RealatedProduct/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [sizes, setSizes] = useState("");

  const fetchProdData = async () => {
    const item = products.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  };
  useEffect(() => {
    fetchProdData();
  }, [productId, products]);

  return productData ? (
    <div className="flex flex-col items-center justify-center px-20 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="  flex gap-12 flex-col sm:flex-row  ml-10 sm:ml-20">
        <div className="flex-1 flex flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal w-[20%] scrollbar-hide">
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className="w-[14%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
                alt={`Product view ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="p1-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSizes(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === sizes ? "border-red-600" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, sizes)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            Add To Cart
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delivery Is Available On This product</p>
            <p>Easy Return And Exchange Pollicy Within 7 Days</p>
          </div>
        </div>
      </div>
      <div className="mt-20 ">
              <div className="flex">
                <b className="border px-5 py-3 text-sm">Description</b>
                <p className="border px-5 py-3 text-sm">Reviews(122)</p>
              </div>
              <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quod amet vero velit provident quam possimus consequatur. Numquam, eligendi! Hic dolore sed quod! Ea deleniti aliquid quaerat quod voluptatibus distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sequi rerum aliquam officia cum eos unde harum, excepturi modi reiciendis! Aliquam ducimus veritatis architecto quibusdam, animi consequatur, praesentium consequuntur assumenda dicta placeat, accusamus numquam voluptatibus.</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam enim excepturi suscipit, recusandae debitis sequi quis sed, deserunt vitae saepe temporibus eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe consequuntur voluptas aut, minus, expedita dolorem atque pariatur nam doloremque sunt tenetur hic.</p>
              </div>
      </div>

      <div className="mt-6">
        <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

import React from 'react'
import { TbPointFilled } from "react-icons/tb";
import HERO_MOVIE_IMG1 from "../../assets/HERO_MOVIE_IMG1.webp";
import HERO_MOVIE_IMG1_TITLE from "../../assets/HERO_MOVIE_IMG1_TITLE.webp";
import { FaPlus, FaPlay } from "react-icons/fa6";
import Cards from '../Cards/Cards'
import "./Hero.css";

function Hero() {
  return (
    <>
    <div className="w-[93vw] ml-[6.4%] relative right-0 top-0 " id="hero-movie-section">
        <div className="w-full h-[100vh] relative" id="hero-movie-section-child">
          <img src={HERO_MOVIE_IMG1} alt="hero-movie-img" id="hero-movie-section-child-child-img" />
          <div className="absolute top-60 left-0 w-[45%] p-10 " id="hero-movie-section-child-child">
            <img
              src={HERO_MOVIE_IMG1_TITLE}
              alt="hero-movie-img-title"
              
            />
            <div className="flex gap-2 text-white">
              <p className="flex items-center gap-2">2019 <TbPointFilled /></p>
              <p className="flex items-center gap-2">2h 8m <TbPointFilled /></p>
              <p className="flex items-center gap-2">4 Languages <TbPointFilled /></p>
              <p className="flex items-center gap-2">U/A 13+</p>
            </div>
            <p className="text-white mt-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minus, pariatur voluptate beatae dolorem eaque.
            </p>
            <div className="flex gap-2">
              <p>Sports |</p>
              <p>Drama |</p>
              <p>Power Struggle |</p>
              <p>Rivalry</p>
            </div>
            <div className="flex gap-2 w-full mt-4">
              <button className="flex items-center justify-center gap-2  bg-gray-200 text-black text-lg font-bold px-4 py-3 rounded-md w-[70%]"><FaPlay /> Subscribe To Watch</button>
              <button className="bg-gray-200 text-black text-lg font-bold px-4 py-3 rounded-md flex items-center justify-center gap-2"><FaPlus /> My List</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
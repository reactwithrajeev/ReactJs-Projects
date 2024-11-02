import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const handlePlay = () => {
    navigate('/player/123');
  }
  return (
    <div className="w-full ">
      <Navbar />
      <div className="w-full relative">
        <img
          src={hero_banner}
          alt="banner"
          className="w-full object-cover -z-1"
          id="heroBanner"
        />
        <div className="absolute top-36 w-[700px] left-20">
          <img src={hero_title} alt="title" className="" />
          <h1 className="py-2 text-[25px]">GOAT - The Greatest of All Time</h1>
          <p>
            He was his agency's top hostage negotiator, field agent and spy —
            but years after retiring, one mission brings his past back to haunt
            him and his family.
          </p>
          <div className="flex items-center justify-start py-5 gap-4 ">
            <button onClick={handlePlay} className="py-2 cursor-pointer hover:-translate-y-1 hover:scale-90 transition ease-in-out hover:bg-slate-300 px-10 text-lg  bg-white rounded border-none outline-none text-black flex items-center justify-center gap-3">
              <img className="w-[25px] " src={play_icon} alt="play icon" />
              Play
            </button>
            <button className="py-2 cursor-pointer hover:-translate-y-1 hover:scale-90 transition ease-in-out hover:bg-gray-700 px-10 text-lg  bg-gray-900 rounded border-none outline-none text-slate-50 flex items-center justify-center gap-3">
              <img className="w-[25px] " src={info_icon} alt="" />
              Info
            </button>
          </div>
        </div>
        <div className="w-full absolute bottom-0 ">
          <TitleCards />
        </div>
      </div>
      <div className="">
        <TitleCards title={"Block-buster Movies"} category = {"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category = {"popular"}/>
        <TitleCards title={"Upcoming"} category = {"upcoming"}/>
        <TitleCards title={"Top Pics For You"} category = {"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;

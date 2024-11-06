import React from "react";
import logo from "../../assets/Logo.svg";
import { CiSearch } from "react-icons/ci";
import { LuTv } from "react-icons/lu";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaBaseballBatBall } from "react-icons/fa6";
import { ImMakeGroup } from "react-icons/im";
import PROFILE_ICON from "../../assets/PROFILE_ICON.png";
import { LuHome } from "react-icons/lu";
import "./MenuBar.css";
import { NavLink } from "react-router-dom";
import { logout } from "../../Firebase";
import { CiLogout } from "react-icons/ci";


function MenuBar() {
  const handleLogout = async () => {
    await logout();
  }
  return (
    <div className="w-[6%] h-[100vh] fixed left-0 top-0 flex flex-col items-center justify-star z-10 bg-gray-950">
      <div className="mt-10">
        <img src={logo} alt="logo" />
      </div>
      <div className="absolute top-28 w-[250px] left-5  mt-12 flex flex-col gap-4">
        <div className="  p-2 rounded-md flex items-center gap-2 menuItems">
          <NavLink to="/myspace">
            <div className="flex items-center gap-2">
              <img
                src={PROFILE_ICON}
                alt="profile-icon"
                className="w-7 h-7 menuIcon"
              />
              <div className=" text-xl font-bold menuLinksName">My Space</div>
            </div>
          </NavLink>
        </div>
        <div className=" p-[10px] w-[50px] h-[50px] rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <CiSearch className="text-gray-600 text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">Search</div>
          </div>
        </div>
        <div className=" p-2 rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <LuHome className=" text-gray-600 cursor-pointer transition duration-500 ease-linear   text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">Home</div>
          </div>
        </div>
        <div className="p-2 rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <LuTv className=" text-gray-600 cursor-pointer transition duration-500 ease-linear  text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">TV</div>
          </div>
        </div>
        <div className="p-2 rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <BiSolidCameraMovie className=" text-gray-600 cursor-pointer transition duration-500 ease-linear   text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">Movies</div>
          </div>
        </div>
        <div className=" p-2 rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <FaBaseballBatBall className=" text-gray-600 cursor-pointer transition duration-500 ease-linear   text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">Sports</div>
          </div>
        </div>
        <div className=" p-2 rounded-md flex items-center gap-2 menuItems">
          <div className="flex items-center gap-2">
            <ImMakeGroup className=" text-gray-600 cursor-pointer transition duration-500 ease-linear   text-2xl font-bold menuIcon" />
            <div className=" text-xl font-bold menuLinksName">Categories</div>
          </div>
        </div>
        <div className="p-2 rounded-md flex items-center gap-2">
          <div className="flex items-center gap-2">
            <button onClick={handleLogout} className="text-2xl border border-gray-600 rounded-[50%] p-1"><CiLogout /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;

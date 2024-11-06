import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const Player = () => {
  let { id } = useParams();
  let [video_key, setVideo_key] = useState({});

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_VIDEOS_API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setVideo_key(res.data.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-full h-screen bg-black border relative flex items-center justify-center flex-col gap-2">
        <NavLink to="/">
        <button className="absolute top-20 left-5 text-white text-5xl z-10 cursor-pointer"><IoArrowBackCircleOutline /></button>
        </NavLink>
      <div className="w-full h-screen bg-black border relative flex items-center justify-center flex-col gap-2">
        <iframe
          src={`https://www.youtube.com/embed/${video_key.key}`}
          frameBorder="0"
          className="w-full h-full"
          allowFullScreen
          height="90%"
          width="90%"
          title="Trailer"
        ></iframe>
      </div>
    </div>
  );
};

export default Player;

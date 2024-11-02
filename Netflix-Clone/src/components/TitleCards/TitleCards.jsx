import React, { useRef, useEffect, useState } from "react";
// import cards_data from "./Cards_data";
import './TitleCard.css';
import { NavLink } from "react-router-dom";

function TitleCards({title, category}) {
  const cardBoxRef = useRef();
  let [cards_data, setCards_data] = useState([])

let  getMovies = async ()=>{
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKey) {
    console.error("API key is missing. Please check your environment variables.");
  }
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  }
  
  
  await fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setCards_data(res.results))
    .catch(err => console.log(err));
    // console.log(res.results)

}


  useEffect(() => {
    getMovies()
    const handleScroll = (e) => {
      e.preventDefault();
      cardBoxRef.current.scrollLeft += e.deltaY; 
    };
    const cardBox = cardBoxRef.current;
    cardBox.addEventListener("wheel", handleScroll);

  
    return () => {
      cardBox.removeEventListener("wheel", handleScroll);
    };
  }, [category]);

  return (
    <div className="ml-4 mt-10">
      <p className="font-semibold mb-2 text-[25px]">{title?title:"Popular On Netflix"}</p>
      <div
        className="w-full py-3 flex overflow-x-auto whitespace-nowrap gap-4 "
        id="cardBox"
        ref={cardBoxRef}
      >
        {cards_data.map((card,index) => (
          <NavLink to={`/player/${card.id}`}
            key={index}
            className="w-[250px] min-w-[250px] rounded-lg overflow-hidden hover:-translate-y-1 cursor-pointer transition ease-in-out relative"
          >
            <img src={card.backdrop_path ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}` : '/path-to-placeholder-image.jpg'} alt="card-Image" className="object-contain" />
            <p className="absolute top-1 left-[25%] bg-red-700 text-white py-1 px-5 rounded-xl shadow-xl text-sm">
              {card.original_title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default TitleCards;

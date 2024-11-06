import React, { useEffect, useRef, useState } from 'react'
import "./Card.css"
import axios from 'axios'
import { NavLink } from 'react-router-dom'



function Cards({ title, category}) {
  const cardsRef = useRef()
  const [cardsData, setCardsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleScroll = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/trending/${category}/day?language=en-US`,
      params: { language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_VIDEOS_API_KEY,
      }
    }

    axios.request(options)
      .then(res => {
        setCardsData(res.data.results) // Fix here
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError("Failed to load data.")
        setLoading(false)
      })

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleScroll)
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleScroll)
      }
    }
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-white text-[25px] font-semibold ml-4 '>{title}</h1>
      <div className='w-full py-3 flex overflow-x-auto whitespace-nowrap gap-2' id='card-section' ref={cardsRef}>
        {cardsData.map((card) => (
         <NavLink to={`/player/${card.id}`} key={card.id}>
           <div className='w-[185px] min-w-[185px] h-[350px] rounded overflow-hidden hover:-translate-y-1 cursor-pointer transition ease-in-out'>
            <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt={card.title} className='object-cover' />
          </div>
         </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Cards

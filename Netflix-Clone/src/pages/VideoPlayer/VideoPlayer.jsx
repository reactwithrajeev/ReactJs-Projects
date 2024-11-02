import React,{useEffect,useState} from 'react'
// import 'VideoPlayer.css';
import back_arrow from '../../assets/back_arrow_icon.png';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function VideoPlayer() {
  let {id} = useParams()
let [video_key,setVideo_key] = useState({
   name:"",
   published_at:"",
   type:"",
   typeof:""
})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_PLAYER_VIDEO_API_KEY
    }
  };
  
  let video_data = async ()=>{
    await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setVideo_key(res.results[0]))
    .catch(err => console.error(err));
  }

  useEffect(()=>{
    video_data()
  },[])

  return (
    <div className='w-full h-screen bg-black border relative flex items-center justify-center flex-col gap-2'>
      <NavLink to="/">
        <button className='absolute top-10 left-5 w-12'><img src={back_arrow} alt="back icon" /></button>
      </NavLink>
      <div className='w-[90%] h-[90%] bg-white border border-red-500 rounded-xl overflow-hidden'>
        <iframe src={`https://www.youtube.com/embed/${video_key.key}`} frameBorder="0" className='w-full h-full' allowFullScreen height="90%" width="90%" title='Trailer'></iframe>
      </div>
      <div className='flex items-center justify-between w-[90%] text-white text-[18px]'>
        <p>{video_key.published_at.slice(0,10)}</p>
        <p>{video_key.name}</p>
        <p>{video_key.type}</p>
      </div>
      
    </div>
  )
}

export default VideoPlayer
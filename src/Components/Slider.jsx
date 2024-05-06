import React, { useEffect, useState } from 'react'
import BaseApi from './BaseApi'
const Image_base_url='https://image.tmdb.org/t/p/original'
import './slider.css'
function Slider() {
    const [movieList,setMovieList]=useState([])

    useEffect(()=>{
   getTrendingMovies()
    },[])
    const getTrendingMovies=()=>{
        BaseApi.getTrendingVideos.then(response=>{
            console.log(response.data.results);
            setMovieList(response.data.results)
        })
    }
  return (
    <div className='flex slider w-full px-16 py-4 '>
        {movieList.map((item,index)=>
     <img src={Image_base_url+item.backdrop_path
     } className='min-w-full object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400' style={{height:'330px'}} />
    )}
    </div>
  )
}

export default Slider
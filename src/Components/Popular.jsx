import React, { useEffect, useState } from 'react'
import BaseApi from './BaseApi'
const Image_base_url='https://image.tmdb.org/t/p/original'

function Popular() {
    const[popular,setPopular]=useState([])

    useEffect(()=>{
        getpopularmovies()
   
    },[])

    const getpopularmovies=()=>{
     BaseApi.getmoviesbyPopular.then(response=>{
        console.log(response.data.results)
        setPopular(response.data.results)
     })
    }
  return (
    <>
    <h2 className='fs-4 m-4 ms-5 ps-2 text-light'><b>Popular</b></h2>
    <div className='d-flex m-2 ms-5 p-2 ps-4 gap-5   ' style={{overflowX:'visible'}}>
       {popular.map((item)=>
       <img src={Image_base_url+item.poster_path} className='w-25 rounded border border-secondary rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'style={{height:'320px'}} />
    )}
    </div>
    
    </>
  )
}

export default Popular

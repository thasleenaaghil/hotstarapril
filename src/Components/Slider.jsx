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
   
      <div className= 'd-flex w-100 px-1 py-4' >
        
       
           
                  {movieList.map((item,index)=>index<=0&&(  <div><img src={Image_base_url+item.backdrop_path} className='d-flex min-w-full object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400' style={{height:'500px',position:'absolute'}} />
                  
                  <div className='text-light px-16 py-4 w-100  mt-5 ' style={{position:'relative',backgroundColor:'transparent',height:'350px',width:'200vh'}} >
            <h1 style={{backgroundColor:'transparent'}}>{item.title}</h1>
            <p style={{backgroundColor:'transparent',textAlign:'justify',overflowX:'hidden'}}>{item.overview}</p>
            <h4 style={{backgroundColor:'transparent'}}>2h:45min</h4>
            <button className='btn btn-light'style={{backgroundColor:'transparent',color:'white'}} >Watch Now</button>
           </div> 
                  
                  
                  
                  
                  </div>
                  
                
                
                )
                 
          
       
        
         
         
          
     
            
       
      )}
      {/* <div style={{position:'absolute',color:'white',backgroundColor:'transparent'}}>
        
        {movieList.map((item)=>item.title)}
      </div> */}
      </div>
  
  )
}

export default Slider
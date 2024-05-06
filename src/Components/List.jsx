import React, { useEffect, useState } from 'react'
import BaseApi from './BaseApi'
import Card from './Card'
const Image_base_url='https://image.tmdb.org/t/p/original'



function List({genreId}) {
    const[genrelist,setGenreList]=useState([])
    useEffect(()=>{
        getmoviebyId()
    },[])

    const getmoviebyId=()=>{
        BaseApi.getmoviesbygenre(genreId).then(res=>{
       console.log(res.data.results)
       setGenreList(res.data.results)
        })
    }
  return (
    <>
      <div  className='d-flex m-2 p-2 gap-5 scrollbar-none' style={{overflowX:'auto'}}>
       {genrelist.map((item,index)=>(
       
         
             <img src={Image_base_url+item.poster_path} className='w-25 rounded border border-secondary rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'style={{height:'320px'}}/>
             
            
        
       ))}
       
      
      </div>
      {/* <div className='d-flex m-2 p-2 gap-5 scrollbar-none' style={{overflowX:'auto'}}>
       {genrelist.map((item,index)=>(
       
     <div className='w-50'style={{height:'320px'}}> <p style={{color:'white',textAlign:'justify'}}>{item.overview}</p></div>
      

       
            
        
       ))} 

       </div > */}
    </>
  )
}

export default List
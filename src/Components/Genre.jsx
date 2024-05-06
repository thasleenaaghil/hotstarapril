import React from 'react'
import Genrelist from '../Constant/Genrelist'
import List from './List'

function Genre() {
  return (
    <>
    {Genrelist.genere.map((item)=>(
            <div className='p-8 px-8 md:px-16'>
                <h2 className='text-[20px] text-white 
                font-bold'>{item.name}</h2> 
                <List genreId={item.id}/>
                
            </div>
    ))}
    
    </>
  )
}

export default Genre

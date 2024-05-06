import React from 'react'
import disney from './../assets/images/disney.png'
import marvel  from './../assets/images/marvel.png'
import pixar  from './../assets/images/pixar.png'
import nationalG  from './../assets/images/nationalG.png'
import starwar  from './../assets/images/starwar.png'
import marvelV  from './../assets/videos/marvelV.mp4'
import geographic  from './../assets/videos/geographic.mp4'
import disneyV  from './../assets/videos/disneyV.mp4'
import starV from './../assets/videos/starV.mp4'
 import pixarS from './../assets/videos/pixarS.mp4'
 import './Disney.css'

function Disney() {

const DisneyList =[
    {
        id:1,
        image:disney,
        video:disneyV
    },
    {
        id:2,
        image:pixar,
        video:pixarS
    },
    {
        id:3,
        image:marvel,
        video:marvelV
    },
    {
        id:4,
        image:starwar,
        video:starV
    },
    {
        id:5,
        image:nationalG,
        video:geographic
    }
]
  return (
    <div className='d-flex  pt-4 ps-5 px-5 md:px-16 gap-4 md:gap-5'>
        {DisneyList.map((item)=>(
            <div className='border border-secondary rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-gray-800'  >
                <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md '/>
                <img src={item.image} className='w-full z-[1] ' />
                
            </div>

        ))}
        
    </div>
  )
}

export default Disney
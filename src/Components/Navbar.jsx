import React from 'react'
import  logo from './../assets/images/logo.png'
import avatar from './../assets/images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMagnifyingGlass,faPlus,faStar,faFilm,faVolleyball } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

import Navbaritems from './Navbaritems'

function Navbar() {
//  const menu=[
//   {
//     name:'HOME',
//     icon: <FontAwesomeIcon icon={faHouse}  />
//   },
//   {
//     name:'SEARCH',
//     icon: <FontAwesomeIcon icon={faMagnifyingGlass}  />
//   },
//   {
//     name:'WATCH LIST',
//     icon:<FontAwesomeIcon icon={faPlus} />
//   },
//   {
//     name:'ORIGINALS',
//     icon:<FontAwesomeIcon icon={faStar} />
//   },
//   {
//     name:'MOVIES',
//     icon:<FontAwesomeIcon icon={faFilm} />
//   },
//   {
//     name:'SPORTS',
//     icon:<FontAwesomeIcon icon={faVolleyball}  />
//   }
//  ]
  
    
  return (
    <>
    <div className='d-flex align-items-center justify-content-between p-1' >
       
    
  
   
    <div style={{color:'white'}} className='d-flex align-items-center '>
    <img src={logo} alt="" style={{width:"90px"}} />
         <h6  className='ps-4 pe-2' id='back'>HOME</h6>
        <FontAwesomeIcon icon={faHouse} className='pb-2 pe-2 icon' />
        <h6 className='ps-4 pe-2' id='back'>SEARCH</h6>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='pb-2 pe-2 icon' />
        <h6 className='ps-4 pe-2'id='back'>WATCH LIST</h6>
        <FontAwesomeIcon icon={faPlus} className='pb-2 pe-2 icon' />
        <h6 className='ps-4 pe-2'id='back'>ORIGINALS</h6>
        <FontAwesomeIcon icon={faStar} className='pb-2 pe-2 icon'/>
        <h6 className='ps-4 pe-2'id='back'>MOVIES</h6>
        <FontAwesomeIcon icon={faFilm} className='pb-2 pe-2 icon'/>
        <h6 className='ps-4 pe-2'id='back'>SPORTS</h6>
        <FontAwesomeIcon icon={faVolleyball} className='pb-2 pe-2 icon' /> 
        

    </div>
    <img src={avatar} alt="" style={{width:"90px"}} />
    </div>
    </>
  )
}

export default Navbar
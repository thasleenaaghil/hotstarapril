import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
    <div className='row text-light mt-5 ms-5'>
    <div className='col-md-1'></div>
         <div className='col-md-2'>
            <h5>Company</h5>
 <h6 style={{color:'#888888'}}>About Us</h6>
 <h6 style={{color:'#888888'}}>Careers</h6>
         </div>
         
         <div className='col-md-3'>
         <h5>View website in</h5>
            <h6 style={{color:'#888888'}}>English</h6>
         </div>
         
         <div className='col-md-3'>
            <h5>Need help?</h5>
            <h6 style={{color:'#888888'}}>Visit help center</h6>
            <h6 style={{color:'#888888'}}>Share feedback</h6>
         </div>

       <div className='col-md-3' >
<h5>Connect with us</h5>
<FontAwesomeIcon icon={faFacebook} className='pb-2 pe-2 fs-3 ' style={{color:'#888888'}}/>
<FontAwesomeIcon icon={faTwitter} className='pb-2 ps-5 fs-3' style={{color:'#888888'}}/>
       </div>
<p className='text-center mt-3' style={{color:'#888888'}}>2023 All Rights Reserved.</p>
    </div>
    
    
    </>
  )
}

export default Footer
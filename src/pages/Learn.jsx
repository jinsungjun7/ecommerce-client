import React from 'react'
import '../css/learn.css'

import space from "../images/core/spacelearn.jpg"
import flyingrocket from '../images/core/rocket-learn.jpg'

import LearnService from './LearnServices';
import LearnAbout from './LearnAbout';
import LearnProducts from './LearnProducts';
import LearnContact from './LearnContact'

function Learn() {
  return (
    <div className='learn-container' style={{
        
        backgroundAttachment:"fixed",
        backgroundImage: `url(${space})`,
        minHeight:"500px",
        backgroundPosition:'center',
        backgroundSize:"cover",
    }}>

    <LearnService />
    <hr />
    <LearnAbout />
    <hr />
    <LearnProducts />    
    <hr />
    <LearnContact />
    
    </div>
  )
}

export default Learn
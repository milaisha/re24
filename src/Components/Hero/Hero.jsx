import React from 'react';
import './Hero.css';
import hero_image from '../Asset/Assets/hero_image.png';
import arrow_icon from '../Asset/Assets/arrow.png'

function Hero() {
  return (
    <div className='hero'>
    <div className='hero-left'>
     <h2>NEW ARRIVALS SOON</h2>
      <div className='hand-hand-icon'>
        <p>New Collections</p>
        </div>
         <p>For Everyone</p>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt=''/> 
          </div>
</div>
    <div className='hero-right'>
    <img src={hero_image} alt=''/>

    </div>
    </div>
  )
}

export default Hero
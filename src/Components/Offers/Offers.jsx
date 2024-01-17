import React from 'react';
import './Offers.css';
import exclusive_image from '../Asset/Assets/exclusive_image.png';

function Offers() {
  return (
    <div className='offers'>
     <div className='offers-left'>
      <h1>ExCLUSIVE</h1>
      <h1>Black Friday Offers</h1>
      <p>ONLY ON MOST SOLD ITEMS</p>
      <button>Check Now</button>
     </div>
    <div className='offers-right'>
       <img src={exclusive_image}  alt=''/>
    </div>
    </div>
  )
}

export default Offers
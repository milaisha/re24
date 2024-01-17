import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
    <div className='descriptionbox-navigator'>
    <div className='descriptionbox-nav-box'>Description</div>
    <div className='descriptionbox-nav-box fade'>Reviews(200)</div>
    </div>
    <div className='descriptionbox-description'>
        <p>An e-commerce website that facilitates buying and selling of products over the internet .
            It serves as a virtual shop where businesses showcase their products,interactaction with customers
            and conduct transaction without the need for physical presence.E-commerce websites have gained
            immense popularity due to their convenience,accessibility and the global reach they Offer.</p>
    </div>
    </div>
  )
}

export default DescriptionBox
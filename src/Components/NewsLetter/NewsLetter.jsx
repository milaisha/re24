import React from 'react'
import'./NewsLetter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Get exclusive offers on your Email</h1>
      <p>Subscribe to our Email and Stay Updated</p>
      <div>
        <input type='email' placeholder='Your Email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
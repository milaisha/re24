import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import cart_icon from '../Asset/Assets/cart_icon.png'
import logo from '../Asset/Assets/logo.png'

function Navbar() {

const[menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
     <div className='nav-logo'>
      <img src={logo} alt=''/>
      <p>APPAREL MODISH</p>
     </div>
        <ul className='nav-menu'>
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu=== "shop"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/Mens'>Men</Link> {menu=== "Men"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("Womens")}} ><Link style={{textDecoration:'none'}}  to='/Womens'>Womens</Link> {menu=== "Women"? <hr/>:<></>}</li>
        <li onClick={() =>{setMenu("Kids")}} ><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link> {menu=== "Kids"? <hr/>:<></>}</li>

        </ul>
          <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className='nav-cart-count'>0</div>
          </div>
         
    </div>
  )
}

export default Navbar
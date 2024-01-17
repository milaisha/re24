import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asset/Assets/star_icon.png';
import star_dull_icon from '../Asset/Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
     <div className='productdisplay-left'>
     <div className='productdisplay-image-list'>
       <img src={product.image} alt=''/>
       <img src={product.image} alt=''/>
       <img src={product.image} alt=''/>
       <img src={product.image} alt=''/>
     </div>
      <div className='prouctdisplay-img'>
       < img className='productdisplay-main-img' src={product.image} alt=''/>
      </div>
     </div>
     <div className='productdisplay-right'>
       <h1>{product.name}</h1>
       <div className='productdisplay-right-stars'>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_icon} alt=''/>
         <img src={star_dull_icon} alt=''/>
         <p>(150)</p>
       </div>
       <div className='productdisplay-right-prices'>
        <div className='productdisplay-right-price-old'>${product.old_price}</div>
        <div className='productdisplay-right-price-new'>${product.new_price}</div>
       </div>
     </div>
     <div className='productdisplay-right-description'>
        A lightweight fitting for casual occassions.And can be worn as an undershirt or outer garment
     </div>
     <div className='productdisplay-right-size'>
        <h1>Select Size</h1>
        <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
     </div>
     <button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
    </div>
  )
}

export default ProductDisplay
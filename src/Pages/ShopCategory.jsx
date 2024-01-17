import React, { useContext } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Asset/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';


function ShopCategory(props) {
  const{all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
     <img src={props.banner} alt='' />
     <div className='shopcategory-indexSort'>
       <p>
        <span> Showing 1-10</span> out of 50 of New arrival
       </p>
     </div>
      <div className='shopcategory-sort'>
        Sort by <img src={dropdown_icon} alt='' /> Coming soon!
      </div>
      <div className='shopcategory-products'>
        {all_product.map ((item,i)=> {
           if (props.category=== item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image} 
            new_price={item.new_price} old_price={item.old_price}/>
           }
       else{
        return null;
       }
        })}
    </div>
    <div className='shopcategory-loadmore'>
       Load more
    </div>
    </div>
    
  )
}

export default ShopCategory;
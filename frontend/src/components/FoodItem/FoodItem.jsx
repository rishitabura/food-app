/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({ itemId, name, price, description, image }) => {

  // const [itemCount, setItemCount] = useState(0)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />

        {
          !cartItems[itemId]
            ? <img className='add' onClick={() => addToCart(itemId)} src={assets.add_icon_white} alt="" />
            : <div className='food-item-counter'>
              <img onClick={() => removeFromCart(itemId)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[itemId]}</p>
              <img onClick={() => addToCart(itemId)} src={assets.add_icon_green} alt="" />
            </div>
        }



      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>

      </div>

    </div>
  )
}

export default FoodItem
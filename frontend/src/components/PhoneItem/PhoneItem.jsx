import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import './PhoneItem.css';
import { StoreContext } from '../../context/StoreContext';

const PhoneItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, handleSendCart, formatPrice} = useContext(StoreContext);

  // Lấy số lượng hiện tại của sản phẩm
  const currentQuantity = cartItems[id]?.quantity || 0;

  return (
    <div className='phone-item'>
      <div className='phone-item-img-container'>
        <img className='phone-item-image' src={image} alt='' />
        {currentQuantity === 0 ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
        ) : (
          <div className='food-item-counter'>
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt='' />
            <p>{currentQuantity}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt='' />
          </div>
        )}
      </div>
      <div className='phone-item-info'>
        <div className='phone-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='' />
        </div>
        <p className='phone-item-desc'>{description}</p>
        <p className='phone-item-price'>{formatPrice(price)}</p>
        <button onClick={() => handleSendCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default PhoneItem;
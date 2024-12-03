import React, { useContext } from 'react'
import './PhoneDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import PhoneItem from '../PhoneItem/PhoneItem'

const PhoneDisplay = ({category}) => {

    const {phone_list} = useContext(StoreContext)

  return (
    <div className='phone-display' id='phone-display'>
      <h2>Check out our new product</h2>
      <div className="phone-display-list">
        {phone_list.map((item, index) => {
            if(category === "All" || category === item.category){
                return <PhoneItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>
  )
}

export default PhoneDisplay

import React from 'react'
import './body.css';
import Swipe from './swipe';
import omeba from '../assets/omeba_shape.png';
const Body = () => {
  return (
    <div className='body-container'>
      <Swipe />
      <div className="body-omeba-container">
        <img src={omeba} alt="" />
        <div>hi</div>
      </div>
    </div>
  )
}

export default Body

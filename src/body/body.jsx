import React from 'react'
import './body.css';
import Swipe from './swipe';
import omeba from '../assets/omeba_shape.png';
import insta_logo from '../assets/insta_logo.png';
import quotaion_logo from '../assets/quotation.png';
import contact_logo from '../assets/contact.png'
const Body = () => {
  return (
    <div className='body-container'>
      <Swipe />
      <div className="body-omeba-container">
        <img src={omeba} alt="omeba background" />
        <div className="body-omeba-container-right">
          <div className="omeba-insta">
            <img src={insta_logo} alt="insta logo" />
            <div className='para'>  
            <p>Folow us on Instagram</p>
            <p>Get updates through instagram</p>
            <p>Watch shorts, promos, sudden offers</p>
            </div>
          </div>
          <div className="omeba-quotation">
            <img src={quotaion_logo} alt="" />
            <div className='para'>
              <p>Ask for Quotaion</p>
              <p>Get the price for your plan</p>
              <p>Look into available plans and offers</p>
            </div>
          </div>
          <div className="omeba-contact">
            <img src={contact_logo} alt="" />
            <div className='para'>
              <p>Contact Us</p>
              <p>Talk with the trip planner</p>
              <p>Get to know the best options for you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

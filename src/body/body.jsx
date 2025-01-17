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
            <p>Instagaram</p>
          </div>
          <div className="omeba-quotation">
            <img src={quotaion_logo} alt="" />
            <p>Ask for Quotaion</p>
          </div>
          <div className="omeba-contact">
            <img src={contact_logo} alt="" />
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

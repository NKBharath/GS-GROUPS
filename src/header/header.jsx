import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="left-header-section">
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>   
      </div>
      <div className="middle-header-section">
        <p>Home</p>
        <p>Packages</p>
        <p>Booking</p>
        <p>Developed By</p>
      </div>
      <div className="right-header-section">
        <p>date and time</p>
      </div>
    </div>
  )
}

export default Header

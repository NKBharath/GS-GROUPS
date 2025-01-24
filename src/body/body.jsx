import React, { useEffect, useRef, useState } from 'react';
import Swipe from './swipe';
import Omeba from './omeba';
import './body.css'
import Details from './details';
const Body = () => {
  

  return (
    <div className="body-container">
      <Swipe />
      <Omeba />
      <Details />
    </div>
  );
};

export default Body;

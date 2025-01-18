import React, { useEffect, useRef, useState } from 'react';
import Swipe from './swipe';
import Omeba from './omeba';
import './body.css'

const Body = () => {
  

  return (
    <div className="body-container">
      <Swipe />
      <Omeba />
    </div>
  );
};

export default Body;

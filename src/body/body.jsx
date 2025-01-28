import React, { useEffect, useRef, useState } from 'react';
import Swipe from './swipe';
import Omeba from './omeba';
import './body.css'
import Details from './details';
import Form from './form';
const Body = () => {
  

  return (
    <div className="body-container">
      <Swipe />
      <Omeba />
      <Details />
      <Form />
    </div>
  );
};

export default Body;

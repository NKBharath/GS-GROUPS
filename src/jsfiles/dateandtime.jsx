import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

   
    return () => clearInterval(timer);
  }, []);

 
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div>
      <p>{formattedDate}</p> 
      <p>{formattedTime}</p> 
    </div>
  );
};

export default CurrentDateTime;

import React, { useEffect, useRef, useState }  from 'react'
import './omeba.css';
import omeba from '../assets/omeba_shape.png';
import insta_logo from '../assets/insta_logo.png';
import quotaion_logo from '../assets/quotation.png';
import contact_logo from '../assets/contact.png';
const Omeba = () => {
    const [inview, setinview] = useState(false);
  const omebaref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setinview(true);
        } else{
          setinview(false);
        }
      },
      { threshold: 0.3 }
    );

    if (omebaref.current) {
      observer.observe(omebaref.current);
    }

    return () => {
      if (omebaref.current) {
        observer.unobserve(omebaref.current);
      }
    };
  }, []);
  return (
    <div className="body-omeba-container" ref={omebaref}>
        <div className="body-omeba-container-left">
            <img src={omeba} alt="omeba background" />
        </div>
        
        <div className="body-omeba-container-right">
          <div className={`omeba-insta ${inview ? 'slideinleft animate' : 'hidden'}`}>
            <img src={insta_logo} alt="insta logo" />
            <div className="para">
              <p className={`fadein ${inview ? 'p-animate-delay-1' : 'hidden'}`}>Follow us on Instagram</p>
              <p className={`fadein ${inview ? 'p-animate-delay-2' : 'hidden'}`}>Get updates through Instagram</p>
              <p className={`fadein ${inview ? 'p-animate-delay-3' : 'hidden'}`}>Watch shorts, promos, sudden offers</p>
            </div>
          </div>
          <div className={`omeba-quotation ${inview ? 'slideinleft animate animate--delay-05s' : 'hidden'}`}>
            <img src={quotaion_logo} alt="" />
            <div className="para">
              <p className={`fadein ${inview ? 'p-animate-delay-1' : 'hidden'}`}>Ask for Quotation</p>
              <p className={`fadein ${inview ? 'p-animate-delay-2' : 'hidden'}`}>Get the price for your plan</p>
              <p className={`fadein ${inview ? 'p-animate-delay-3' : 'hidden'}`}>Look into available plans and offers</p>
            </div>
          </div>
          <div className={`omeba-contact ${inview ? 'slideinleft animate animate--delay-1s' : 'hidden'}`}>
            <img src={contact_logo} alt="" />
            <div className="para">
              <p className={`fadein ${inview ? 'p-animate-delay-1' : 'hidden'}`}>Contact Us</p>
              <p className={`fadein ${inview ? 'p-animate-delay-2' : 'hidden'}`}>Talk with the trip planner</p>
              <p className={`fadein ${inview ? 'p-animate-delay-3' : 'hidden'}`}>Get to know the best options for you</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Omeba

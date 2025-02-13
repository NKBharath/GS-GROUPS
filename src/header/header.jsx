import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './header.css';
import CurrentDateTime from '../jsfiles/dateandtime';
import gslogo from '../assets/gs_groups.png';
const Header = () => {
  const [menu, setMenu] = useState("home"); 

  return (
    <div className="header">
      <div className="left-header-section">
        <img src={gslogo} alt="Logo" />
      </div>
      <div className="middle-header-section ">
          <div>
            <AnchorLink className={menu==="home" ? "navbar-scroll" : "anchor-link"}
             href="#home" onClick={() => setMenu("home")}>
              <p>Home</p>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink className={menu==="packages" ? "navbar-scroll" : "anchor-link"}
            href="#packages" onClick={() => setMenu("packages")}>
              <p>Packages</p>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink className={menu==="booking" ? "navbar-scroll" : "anchor-link"} 
            href="#booking" onClick={() => setMenu("booking")}>
              <p>Booking</p>
            </AnchorLink>
          </div>
          <a href="/developedby" target="_blank" className="anchor-link">
            Developed By
          </a>
      </div>
      <div className="right-header-section">
        <CurrentDateTime />
      </div>
    </div>
  );
};

export default Header;

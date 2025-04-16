import React, { useState } from "react";
import AboutBtn from "../../images/about_btn.png";
import logo from "../../images/logo.png";

const MobileCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="header_about_btn" onClick={openNav}>
        <img src={AboutBtn} alt="Open Menu" />
      </div>
      
      <div className={`mobile_cart ${isOpen ? "open" : ""}`}>
        <div className="wrap_cart">
          <div className="about_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="cart_close" onClick={closeNav}>×</div>
          <div className="content">
            <p>Nonta is a website that builds and organizes nonprofit programs for private and government organizations.</p>
            <h2>Contact Info</h2>
            <span>+123 456 789 33 3</span>
            <span>Madison Street, NY United States of America</span>
            <span>nonta@gmail.com</span>
            <h2>Office Address</h2>
            <span>Time Square, New York USA, 3454</span>
            <ul className="social_widget">
              <li><a href="#"><i className="ti-facebook"></i></a></li>
              <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
              <li><a href="#"><i className="ti-linkedin"></i></a></li>
              <li><a href="#"><i className="ti-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCart;

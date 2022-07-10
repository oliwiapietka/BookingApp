import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text-email-1">Save time, save money!</p>
      <p className="footer-text-email-2">
        Sign up and we'll send the best deals to you.
      </p>
      <div className="footer-text-container">
        <p className="footer-logo">BOOKING</p>
        <div className="footer-texts">
          <p className="footer-text">Home</p>
          <p className="footer-text">About</p>
          <p className="footer-text">Contact</p>
          <p className="footer-text">Login</p>
        </div>
      </div>
      <div className="email-form-container">
        <div className="email-mail-icon">
          <ion-icon name="mail-sharp"></ion-icon>
        </div>
        <input className="email-form" placeholder="Enter your e-mail" />
        <div className="email-send-icon">
          <ion-icon name="send-sharp"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Footer;

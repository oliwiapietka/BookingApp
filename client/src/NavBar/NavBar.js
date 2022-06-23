import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>BOOKING</div>
      <div className='other-container'>
      <div>Home</div>
      <div className='contact-button'>Contact</div>
      <div className='register-button'>Register</div>
      <div className='login-button'>Login</div>
      </div>
    </div>
  );
}

export default NavBar;

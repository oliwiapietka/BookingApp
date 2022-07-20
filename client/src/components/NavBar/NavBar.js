import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link
        to="/BookingApp"
        style={{ textDecoration: "inherit", color: "inherit" }}
      >
        <div className="logo">BOOKING</div>
      </Link>
      <div className="other-container">
        <div>Home</div>
        <div className="contact-button">Contact</div>
        {user ? user.username : (
          <>
            <div className="register-button">Register</div>
            <div className="login-button">Login</div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;

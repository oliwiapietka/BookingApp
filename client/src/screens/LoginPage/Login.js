import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/BookingApp");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-main-text">Enter your username and password!</h1>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="login-input"
        ></input>
        <input
          securetextentry='true'
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="password-input"
        ></input>
        <button
          disabled={loading}
          onClick={handleClick}
          className="login-button"
        >
          Login
        </button>
        {error && <span className="login-error-message">{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;

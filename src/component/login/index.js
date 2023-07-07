import React, { useState } from "react";
import "./index.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const cred = {
  email: "ramanwalprajwal1@gmail.com",
  pass: "raman@123",
};  

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setinputValue] = useState({});

  const handleInputChange = ({ target: { value, name } }) => {
    console.log(value, name);
    setinputValue({ ...inputValue, [name]: value });
  };

  const responseMessage = (response) => {
    localStorage.setItem("googleToken", response.credential);
    if (response.credential) {
      navigate("/home");
    }
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const handleSubmit = () => {
    if (
      cred.email === inputValue.username &&
      cred.pass === inputValue.password
    ) {
      localStorage.setItem(
        "authToken",
        "abscbh3478yr943yc9tnc45tytvcew3grc3y9y4yt34yrcy4y3"
      );
      navigate("/home");
    }
  };

  return (
    <div>
      {" "}
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div htmlFor="username">Username</div>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <div htmlFor="password">Password</div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div style={{ marginTop: "5px" }}>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./index.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  const handleInputChange = () => {};

  const responseMessage = (response) => {
    localStorage.setItem("googleToken", response.credential);
    if (response.credential) {
      navigate("/home");
    }
  };

  const errorMessage = (error) => {
    console.log(error);
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

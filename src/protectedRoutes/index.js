import React from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../component/login";

export const LoginRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("authToken");
  const token2 = localStorage.getItem("googleToken");
  const isLoggedin = token || token2 ? true : false;
  const protectedRouting = {
    userLoggedIn: isLoggedin ? <AppRoutes /> : <Navigate to="/" />,
  };

  return protectedRouting.userLoggedIn;
};

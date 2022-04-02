import React from "react";
import { useState, useEffect } from "react";
import HomePage from "./pages/Home/index";
import axios from "axios";

import { Route, Routes } from "react-router";
import Overview from "./components/ProductDetailsPage/Overview";
import OrderOnline from "./components/ProductDetailsPage/OrderOnline";
import Reviews from "./components/ProductDetailsPage/Reviews";
import Photos from "./components/ProductDetailsPage/Photos";
import Menu from "./components/ProductDetailsPage/Menu";
import Home from "./components/Home/Home";

import { Login } from "./components/common/login/Login";
import { PhoneSignup } from "./components/common/login/Phonesignup";
import { Signup } from "./components/common/signup/SignUp";

import MobilePage from "./components/MobilePage/MobilePage";

const App = () => {
  const [data, setData] = useState(null);

  // {/* <Login/> */}
  //  {/* <PhoneLogin/> */}
  // {/* <SignUp/> */}

  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/orderonline"} element={<OrderOnline />} />
      <Route path={"/overview"} element={<Overview />} />
      <Route path={"/reviews"} element={<Reviews />} />
      <Route path={"/photos"} element={<Photos />} />
      <Route path={"/menu"} element={<Menu />} />
      <Route path={"/mobilepage"} element={<MobilePage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/phonelogin"} element={<PhoneSignup />} />
    </Routes>
  );
};

export default App;

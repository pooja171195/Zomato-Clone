import React from "react";
// import Login from "./components/common/login/Login";
// import PhoneLogin from "./components/common/login/PhoneLogin";
// import SignUp from "./components/common/signup/SignUp";

import { Route, Routes } from "react-router";
import Overview from "./components/ProductDetailsPage/Overview";
import OrderOnline from "./components/ProductDetailsPage/OrderOnline";
import Reviews from "./components/ProductDetailsPage/Reviews";
import Photos from "./components/ProductDetailsPage/Photos";
import Menu from "./components/ProductDetailsPage/Menu";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/index";
import { Login } from "./components/common/Login/Login";
import { PhoneSignup } from "./components/common/Login/Phonesignup";
import { Signup } from "./components/common/Signup/SignUp";
import { Landing } from "./pages/Home/landing";
import MobilePage from "./components/MobilePage/MobilePage";
import { OnlineDelivery } from "./components/OnlineDelivery/OnlineDelivery";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/onlinedelivery"} element={<OnlineDelivery />} />
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
    </>
  );
};

export default App;

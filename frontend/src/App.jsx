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
//import Home from "./components/Home/Home";

import { PhoneSignup } from "./components/common/login/Phonesignup";

// import Navbar from "./components/Navbar/index";
import { Login } from "./components/common/login/Login";

import { Signup } from "./components/common/signUp/signp";

import MobilePage from "./components/MobilePage/MobilePage";
import { OnlineDelivery } from "./components/OnlineDelivery/OnlineDelivery";
import { Landing } from "./pages/Home/landing";

import { Addrestaurant } from "./components/Add-restaurant/add-restraunt";
import { OnlinePage } from "./components/OnlineDelivery/OnlinePage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Dinout } from "./components/OnlineDelivery/Dinout";
import { Nightlife } from "./components/OnlineDelivery/Nightlife";
import MobilePage2 from "./components/MobilePage/mobilePage2";

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
        <Route path={"/mobilepage2"} element={<MobilePage2 />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/phonesignup"} element={<PhoneSignup />} />
        <Route path={"/addrestaurant"} element={<Addrestaurant />} />
        <Route path="/OnlinePage" element={<OnlinePage />} />
        <Route path="/dinout" element={<Dinout />} />
        <Route path="/nightlife" element={<Nightlife />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;

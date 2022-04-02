import React from "react";
import Home from "./components/Home/Home";
// import Login from "./components/common/login/Login";
// import PhoneLogin from "./components/common/login/PhoneLogin";
// import SignUp from "./components/common/signup/SignUp";
import MobilePage from "./components/MobilePage/MobilePage";

const App = () => {
  return (
    <div>
      <Home/>
      {/* <Login/> */}
      {/* <PhoneLogin/> */}
      {/* <SignUp/> */}
      <MobilePage />
    </div>
  );
};

export default App;

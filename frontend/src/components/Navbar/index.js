import React from "react";
import Search from "../search/search";
// import Header from "../header/header";
import { Nav, NavLink, Bars, NavMenu, NavMenu1, Zomato, Sp,S } from "./Navbar";

const Navbar = () => {
  return (
    <>
      <Nav >
        <Bars>Get the App Add restaurants Log in Sign up</Bars>
        <NavMenu>
          <NavLink to="/mobilepage" activeStyle>
            Get the App
          </NavLink>
          <NavMenu1>
            <NavLink to="/addrestaurant" activeStyle>
              Add restaurants
            </NavLink>
            <NavLink to="/login" activeStyle>
              Log in
            </NavLink>
            <NavLink to="/signup" activeStyle>
              Sign up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu1>
        </NavMenu>

        <Zomato>zomato</Zomato>
        <Sp>Discover the best food & drinks in Allahabad</Sp>
        <S><Search /></S>
      </Nav>
    </>
  );
};

export default Navbar;

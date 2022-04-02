import React from 'react';
import Search from '../search/search';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavMenu1,
  Zomato,
  Sp,
 
} from './Navbar';
  
const Navbar = () => {
  return (
    <>
      <Nav> 
        <Bars >
        Get the App
        Add restaurants
        Log in
        Sign up
          </Bars>
        <NavMenu>
        <NavLink to='/GetApp' activeStyle>
           Get the App
          </NavLink>
          <NavMenu1>
               
        
          <NavLink to='/AddRestaurant' activeStyle>
            Add restaurants
          </NavLink>
          <NavLink to='/SignIn' activeStyle>
            Log in
          </NavLink>
          <NavLink to='/SignUp' activeStyle>
            Sign up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
       
        </NavMenu1>
        </NavMenu>
  
        
        <Zomato >
        zomato
      </Zomato>
      <Sp>
      Discover the best food & drinks in Allahabad
      </Sp>
       <Search/>
      </Nav>
    </>
  );
};
  
export default Navbar;
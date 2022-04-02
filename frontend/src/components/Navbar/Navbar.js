import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-image: url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png");
  height: 430px;
  width: 102%;
  display: grid-flex;
  align: center;
  margin-left: -20px;
  margin-top: -20px;
  margin-right: -20px;
  right: 0px;

  font-family: Arial, Helvetica, sans-serif;
`;

export const NavLink = styled(Link)`
  color: #ffff;
  display: inline;
  margin-top: 40px;
  align-items: top;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  &.active {
    color: #fffff;
    font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;

    top: 0;
    left: 0;
    transform: translate(100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  margin-left: 20px;
  margin-top: 15px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavMenu1 = styled.div`
  display: flex;
  align-items: right;
  margin-left: 760px;
  font-family: Arial, Helvetica, sans-serif;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;

  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Zomato = styled.div`
  display: grid;
  align-items: center;
  margin-top: 30px;
  margin-left: 38%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 90px;
  font-weight: bolder;
  color: #ffffff;
  white-space: nowrap;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Sp = styled.div`
  display: grid;
  align-items: center;
  margin-top: 20px;
  margin-left: 18%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;

  color: #ffffff;
  white-space: nowrap;
  */ @media screen and (max-width: 768px) {
    display: none;
  }
`;

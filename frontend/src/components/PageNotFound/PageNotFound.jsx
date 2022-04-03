import React from "react";
import "./PageNotFound.css";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header />
      </div>
      <hr />
      <div className="PImg">
        <img
          src="https://b.zmtcdn.com/404_web787058f236e16cef33bf733ade2e08ba1574663725.png?output-format=webp"
          alt=""
        />
      </div>
      <div className="PBtn">
        <h3>We can't seem to find the page you're looking for...</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
      </div>
    </>
  );
};

export default PageNotFound;

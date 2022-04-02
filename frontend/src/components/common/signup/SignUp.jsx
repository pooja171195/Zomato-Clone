import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";

import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, googleSignIn } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      alert("please enter correct email or password");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="main">
        <div id="signupContainer">
          <h1>Sign up</h1>
          <form className="signupInputs" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="signupCheckInputs">
              <div id="signupCheck">
                <input className="checkbox" type="checkbox" id="policy" />
              </div>
              <div id="signupLable">
                <label id="lable" htmlFor="policy">
                  I agree to Zomato's Terms of Service, Privacy Policy and
                  Content Policies
                </label>
              </div>
            </div>
            <div className="btn">
              <input type="submit" value="Create Acount" />
            </div>
          </form>
          <div id="line">
            <hr />
            or
            <hr />
          </div>
          <div className="btn">
            <input
              type="submit"
              value=" Continue with Google"
              onClick={handleGoogleSignIn}
            />
          </div>
          <div className="para">
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

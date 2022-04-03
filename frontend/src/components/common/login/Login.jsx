import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      alert("Please enter valid credentials");
    }
  };

  return (
    <>
      <div className="main">
        <div id="signinContainer">
          <h1>Login</h1>
          <form className="signinInputs" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="email id"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <div className="btn">
              <input type="submit" value="Login" />
            </div>
          </form>
          <Link to="/phonesignup">
            {" "}
            <div className="btn">
              <input type="submit" value="Continue with Phone" />
            </div>
          </Link>
          <div className="para">
            <p>
              New to Zomato? <Link to="/signup">Create account </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

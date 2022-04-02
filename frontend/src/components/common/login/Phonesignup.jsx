import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const PhoneSighup = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const { setUpRecaptha } = useUserAuth();

  const getOtp = async (e) => {
    e.preventDefault();
    if (number === "" || number === undefined)
      return alert("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      alert("please enter correct phone number");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="main">
        <div id="phoneContainer">
          <h1>Continue with Phone</h1>
          <form
            className="phoneInputs"
            onSubmit={getOtp}
            style={{ display: !flag ? "block" : "none" }}
          >
            <div className="emailPhoneInputs inputDiv">
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter phone number"
              />
            </div>
            <div id="recaptcha-container"></div>
            <div className="btn1">
              <input type="submit" value="Send OTP" />
            </div>
          </form>

          <form
            className="phoneInputs"
            onSubmit={verifyOtp}
            style={{ display: flag ? "block" : "none" }}
          >
            <input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />

            <div className="btn1">
              <input type="submit" value="Verify" />
            </div>
            <Link to="\login">
              <div className="btn1">
                <input type="submit" value="Cancel" />
              </div>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

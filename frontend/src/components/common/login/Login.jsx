import "./Login.css";
// import profile from "./../image/a.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";
import PhoneLogin from "./PhoneLogin";

function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div>
            <h1>Login Page</h1>
            <div>
              {/* <img src={"https://github.com/AkajithAk/ReactjsDemoYoutube/blob/main/src/image/email.jpg?raw=true"} alt="email" className="email"/> */}
              <input type="text" placeholder="email" className="name" />
            </div>
            <div className="second-input">
              {/* <img src={"https://github.com/AkajithAk/ReactjsDemoYoutube/blob/main/src/image/pass.png?raw=true"} alt="pass" className="email"/> */}
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>

              <div className="second-input">
                <a href={<PhoneLogin />}></a>
                <img
                  className="continueWithEmail"
                  src={
                    "data:image/png;base64,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"
                  }
                  alt="pass"
                />
                <button id="continueWithEmail">Login with Phone</button>
              </div>
              <div className="second-input">
                <img
                  className="continueWithEmail"
                  src={
                    "data:image/png;base64,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"
                  }
                  alt="pass"
                />
                <button id="continueWithEmail">Continue with Google</button>
              </div>
            </div>

            {/* <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

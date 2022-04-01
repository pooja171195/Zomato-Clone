import React from 'react'
import './PhoneLogin.css'
function PhoneLogin() {
  return (
    <div className="main1">
     <div className="sub-main1">
       <div>
            <div>
           <h1>Login Page</h1>
           <div>
             {/* <img src={"https://github.com/AkajithAk/ReactjsDemoYoutube/blob/main/src/image/email.jpg?raw=true"} alt="email" className="email"/> */}
             <input type="text" placeholder="enter your number" className="number"/>
           </div>
          
          <div className="login-button">
          <button >Send OTP</button>
         
       </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default PhoneLogin

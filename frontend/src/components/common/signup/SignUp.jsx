
import './SignUp.css'
// import profile from "./../image/a.png";
// import email from "./../image/email.jpg";
// import pass from "./../image/pass.png";


function SignUp() {
  return (
    <div className="main1">
     <div className="sub-main1">
       <div>
            <div>
           <h1>SignUp Page</h1>
           <div>
             {/* <img src={"https://github.com/AkajithAk/ReactjsDemoYoutube/blob/main/src/image/email.jpg?raw=true"} alt="email" className="email"/> */}
             <input type="text" placeholder="email" className="name"/>
           </div>
           <div className="second-input">
             {/* <img src={"https://github.com/AkajithAk/ReactjsDemoYoutube/blob/main/src/image/pass.png?raw=true"} alt="pass" className="email"/> */}
             <input type="password" placeholder="password" className="name"/>
           </div>
           <div>     
        <input type="checkbox" id="policyCheck"   /> <span> I agree to<a className='policy' href='https://www.zomato.com/policies/privacy/'> Zomato's Terms of Service and Privacy Policy.</a>
        </span></div> 
          <div className="login-button">
          <button >Create Account</button>
           
           <div className="second-input">
             <img className="continueWithEmail" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdSoJivulJRpTLNIXfEl-e4Yqts-6Q1L21w9VJfSXM_LePNuoS0H3KzFVua7johhwBr0&usqp=CAU"} alt="pass" />
           <button id='continueWithEmail'>Continue with Google</button>
           </div>
          </div>
           
            
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default SignUp;

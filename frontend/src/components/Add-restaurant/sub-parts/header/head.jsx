import zomato from "../../images/zomato_logo.png"
import './head.css'


export const Head = () =>{

    return(
        <div className="addrest">
            <div className="hed" >
                
                <div className="hed-wrapper">
                        
                        <div className="hed-wrapper-t">
                        
                        <div className='zlogo'>

                        <img src={zomato} alt="logo" className="zlogo"/>

                        </div>

                        <div className="pu">

                            <div className="pu-i">Pro</div>
                            <div className="pu-i">Advertise</div>

                        </div>

                        </div>

                        <div className="hed-wrapper-b">

                            <div className="b-i" >
                                <h2>Register your restaurant on zomato</h2>
                                <p>for free and get more customers!</p>
                                <div className="b-i-btnwrp">
                                <button className="b-i-btn btn-reg">Register your restaurant</button>
                                <button className="b-i-btn btn-clm">Restauarnt already listed?Claim now</button>
                                </div>
                            </div>

                        </div>



                </div>

            </div>
            
        </div>
    );

}
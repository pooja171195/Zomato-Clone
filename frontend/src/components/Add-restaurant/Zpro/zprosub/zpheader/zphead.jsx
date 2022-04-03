import zomato from "../../../images/zomato_logo.png"
import './zphead.css'


export const Zphead = () =>{

    return(
        <div className="Zpro">
            <div className="zphed" >
                
                <div className="zphed-wrapper">
                        
                        <div className="zphed-wrapper-t">
                        
                        <div className='zplogo'>

                        <img src={zomato} alt="logo" className="zplogo"/>

                        </div>

                        <div className="zpu">

                            <div className="zpu-i">Pro</div>
                            <div className="zpu-i">Add a Restaurant</div>
                            <div className="zpu-i">Contact Us</div>

                        </div>

                        </div>

                        <div className="zphed-wrapper-b">

                            <div className="zpb-i" >
                                <h2>Zomato Pro</h2>
                                <p>Change the way customer think about dining out in your city</p>
                                <div className="zpb-i-btnwrp">
                                <button className="zpredy">Ready to start</button>
                                </div>
                            </div>

                        </div>



                </div>

            </div>
            
        </div>
    );

}
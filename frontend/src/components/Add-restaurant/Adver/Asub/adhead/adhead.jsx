import zomato from "../../../images/zomato_logo.png"
import './adhead.css'


export const Adhead = () =>{

    return(
        <div className="adpro">
            <div className="adhed" >
                
                <div className="adhed-wrapper">
                        
                        <div className="adhed-wrapper-t">
                        
                        <div className='adlogo'>

                        <img src={zomato} alt="logo" className="zplogo"/>

                        </div>

                        <div className="adpu">

                            <div className="adpu-i">Advertise</div>
                            <div className="adpu-i">Add a Restaurant</div>
                            <div className="adpu-i">Contact Us</div>

                        </div>

                        </div>

                        <div className="adphed-wrapper-b">

                            <div className="adpb-i" >
                                <h2>Advertise on Zomato</h2>
                                <p>For every marketing dollar spent, Zomato returns over 8x the investment</p>
                                <div className="adpb-i-btnwrp">
                                <button className="adpredy">Ready to start</button>
                                </div>
                            </div>

                        </div>



                </div>

            </div>
            
        </div>
    );

}
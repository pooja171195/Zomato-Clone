import "./gszp.css"
import gszp1 from "../../../images/gszp1.jpeg"
import gszp2 from "../../../images/gszp2.jpeg"
import gszp3 from "../../../images/gszp3.jpeg"

export const Gszp = () =>{

    return(
        <div className="gszp">
           <div className="gszp-wrap">
           <h1>Getting Started with Zomato Pro</h1>
           
           <div className="gszp-cards">
               
               <div className="gszp-card">
                   <div className="gpci">
                       <img src={gszp1} alt="img1" />
                   </div>
                   <div className="gpct">
                       <div className="gpct-info">
                           <h3>Get Invited</h3>
                           <p>Take this chance to join an exclusive club of your city’s most popular and high rated restaurants</p>
                       </div>
                   </div>
               </div>
               
               <div className="gszp-card">
                   <div className="gpct">
                   
                   <div className="gpct-info">
                           <h3>Get Discovered</h3>
                           <p>Get access to our 1.5m + Pro users looking for places to go out and eat.</p>
                       </div>
                   </div>
                   <div className="gpci">
                   <img src={gszp2} alt="img2" />
                   </div>
               </div>
               
               <div className="gszp-card">
                    <div className="gpci">
                    <img src={gszp3} alt="img2" />
                    </div>
                   <div className="gpct">
                   <div className="gpct-info">
                           <h3>Welcome your new Customers</h3>
                           <p>As a Pro partner, provide benefits (upto one complimentary dish for food partners, and two complimentary drinks for drinks partners), and allow customers to experience your great food and service.</p>
                       </div>
                   </div>
               </div>

           </div>
           </div>
        </div>
    );

}
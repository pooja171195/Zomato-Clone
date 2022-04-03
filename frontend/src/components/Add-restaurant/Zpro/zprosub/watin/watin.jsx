import './watin.css'
import watin from "../../../images/watin.png"
import watin1 from "../../../images/watin1.png"
import watin2 from "../../../images/watin2.png"

export const Watin =() =>{

    return(

        <div className="watin">
            <div className='watin-i'>
                <div className='watin-t'>
                    <h1>What's in it for you?</h1>
                </div>
                <div className='watin-cards'>

                    <div className='watin-card'>
                        <div className='watin-crd-img'>
                            <div className='watin-circle' >
                            <img src={watin} alt="ic1"/>
                            </div>
                        </div>
                        <div className='watin-crd-info'>
                            
                            <h4>New User Acquisition</h4>
                            <p>83% users discover a restaurant for the first time through Pro</p>
                        </div>
                    </div>
                    <div className='watin-card'>
                        <div className='watin-crd-img'>
                        
                            <div className='watin-circle '>
                                <img src={watin1} alt="ic2" />
                            </div>
                        </div>
                        <div className='watin-crd-info'>

                            
                            <h4>Higher Rating & Reviews</h4>
                            <p>Average Pro rating by a user is 4.3</p>


                        </div>
                    </div>
                    <div className='watin-card'>
                        <div className='watin-crd-img'>

                            <div className='watin-circle'>
                                <img src={watin2} alt="ic3" />
                            </div>

                        </div>
                        <div className='watin-crd-info'>

                            
                            <h4>Increase in Traffic</h4>
                            <p>During weekdays and non-peak hours</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}
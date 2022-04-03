import "./howad.css"
import howad1 from "../../../images/howad1.png"
import howad2 from "../../../images/howad2.png"

export const Howad = () =>{

    return(
        <div className="howad">
            <div className="hw-wrap">
                <h1>How to advertise on Zomato?</h1>
                <div className="hwc">
                    <div className="hwci">
                        <div className="hwic-p">
                            <img className="how1" src={howad1} alt="" />
                        </div>
                       
                        <div className="hwic-t">
                            <h4>Drive User to You</h4>
                            <p>Generate guaranteed visits to your page via dynamic search ads on our web and mobile platform.</p>
                        </div>
                    </div>
                    <div className="hwci">
                    
                    <div className="hwic-t">
                        <h4>Own Your Category</h4>
                        <p>Boost your placement within relevant collections for your brand.</p>
                    </div>
                    
                    <div className="hwic-p">
                    <img className="how2" src={howad2} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
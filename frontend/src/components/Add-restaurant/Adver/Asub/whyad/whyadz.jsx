import "./whyadz.css"
import whyadz1 from "../../../images/whyadz1.jpeg"

export const Whyadz = () =>{

    return(
        <div className="whyadz">
            <div className="waz-wrap">
                <h1>Why advertise on Zomato?</h1>
                <div className="waz-c">
                    <div className="waz-l">
                        <div className="waz-lc">

                            <h4>Guaranteed Customer Growth</h4>
                            <p>Increase visits to your page which will drive more footfall and revenue for your restaurant.</p>

                        </div>
                        <div className="waz-lc">

                            <h4>Guaranteed Customer Growth</h4>
                            <p>Increase visits to your page which will drive more footfall and revenue for your restaurant.</p>

                        </div>
                        <div className="waz-lc">
                             
                             <h4>Guaranteed Customer Growth</h4>
                            <p>Increase visits to your page which will drive more footfall and revenue for your restaurant.</p>

                        </div>
                        <div className="waz-lc">

                            <h4>Guaranteed Customer Growth</h4>
                            <p>Increase visits to your page which will drive more footfall and revenue for your restaurant.</p>

                        </div>
                    </div>
                    <div className="waz-r">
                        <img src={whyadz1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );

}
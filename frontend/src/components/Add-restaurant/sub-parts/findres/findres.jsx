import "./findres.css"

export const Findres = () =>{

    return (
        <div className="findres">
            <div className="f-wrapper">
                <div className="f-wrapper-l">
                    <div className="f-left">
                        <h3>Cannot find your favourite restaurant on Zomato?</h3>
                        <p>Submit the details and our team will get the restaurant onboard</p>
                    </div>
                </div>
                <div className="f-wrapper-r">
                    <div className="f-right">
                        <input type="text" placeholder="Restaurant name" className="f-right1"/>
                        <input type="text" placeholder="Restaurant location" className="f-right1"/>
                        <input type="text" placeholder="Restaurant contact number" className="f-right1"/>
                        <input type="text" placeholder="what do you like about the restaurant?" className="f-right2"/>
                        <button>Submit</button>
                        <p>Restaurant owners can <a href="#">add restaurant from here</a></p>
                    </div>
                </div>

            </div>
        </div>
    );

}
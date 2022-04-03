import "./wntmore.css"

export const Wntmore = () =>{

    return (
        <div className="wntmore">
            <div className="wn-wrapper">
                <div className="wn-wrapper-l">
                    <div className="wn-left">
                        <h3>Want to know more?</h3>
                        <p>Please leave your contact details here and we'll get back to you within 24 hours or give us a missed call here</p>
                        <p className="zcall">Call us at +91-80396 54500</p>
                    </div>
                </div>
                <div className="wn-wrapper-r">
                    <div className="wn-right">
                        <h2>Your contact details</h2>
                        <input type="text" placeholder="City" className="wn-right1"/>
                        <input type="text" placeholder="Restaurant Name" className="wn-right1"/>
                        <input type="text" placeholder="Full Name" className="wn-right1"/>
                        <input type="text" placeholder="Email id" className="wn-right1"/>
                        <input type="text" placeholder="Phone Number" className="wn-right1"/>
                        
                        <div className="wrb"><button>Submit</button></div>
                    </div>
                </div>

            </div>
        </div>
    );

}
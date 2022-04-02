import './whyp.css'
import why from '../../images/why.png'
import why1 from '../../images/why1.png'
import why2 from '../../images/why2.png'

export const Whyp = () =>{


    return(
        <div className="whyp">
            <div className='whyp-wrapper'>
                <div className='whyp-t'>
                    <h1>Why should you partner with Zomato?</h1>
                    <p>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insignts to improve your business.</p>

                    <div className='whyp-b'>
                        
                        <div className="whyp-b-i">
                            <div className='whyp-b-icon'>
                                <img src={why} alt="globe" />
                            </div>
                            <div className='why-b-crd'>
                                <h3>500+ cities</h3>
                                <p>in India</p>
                            </div>
                        </div>
                        
                        <div className="whyp-b-i">
                            <div className='whyp-b-icon'>
                                <img src={why1} alt="shop" />
                                </div>
                            <div className='why-b-crd'>
                                <h3>2.5 lakhs+</h3>
                                <p>restaurant listing</p>
                            </div>
                        </div>
                        
                        <div className="whyp-b-i">
                            <div className='whyp-b-icon'>
                            <img src={why2} alt="callender" />
                            </div>
                            <div className='why-b-crd'>
                                <h3>4 crore+</h3>
                                <p>monthly orders</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}
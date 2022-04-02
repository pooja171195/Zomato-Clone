import './hworks.css'
import how from "../../images/how.png"
import how1 from "../../images/how1.png"
import how2 from "../../images/how2.png"

export const Hworks =() =>{

    return(

        <div className="hworks">
            <div className='hworks-i'>
                <div className='hworks-t'>
                    <h1>How it works?</h1>
                </div>
                <div className='hworks-cards'>

                    <div className='hworks-card'>
                        <div className='h-crd-img'>
                            <div className='h-circle crd-ic1' >
                                <img src={how} alt="book" />
                            </div>
                        </div>
                        <div className='h-crd-info'>
                            <h3>Step 1</h3>
                            <h4>Create page on Zomato</h4>
                            <p>Help users discover your place by creating a listing on Zomato</p>
                        </div>
                    </div>
                    <div className='hworks-card'>
                        <div className='h-crd-img'>
                        
                            <div className='h-circle crd-ic2 '>
                                <img src={how1} alt="bike" />
                            </div>
                        </div>
                        <div className='h-crd-info'>

                            <h3>Step 2</h3>
                            <h4>Register for online ordering</h4>
                            <p>And deliver orders to millions of customers with ease</p>


                        </div>
                    </div>
                    <div className='hworks-card'>
                        <div className='h-crd-img'>

                            <div className='h-circle crd-ic3'>
                                <img src={how2} alt="packet" />
                            </div>

                        </div>
                        <div className='h-crd-info'>

                            <h3>Step 3</h3>
                            <h4>Start receiving orders online</h4>
                            <p>Manage orders on our partner app, web dashboard or API partners</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}
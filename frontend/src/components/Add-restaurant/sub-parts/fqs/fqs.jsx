import './fqs.css'
import { useState } from 'react';

export const Fqs = () =>{

    const [selected,setselected] = useState(null)

    const toggle = (i) =>{

        if(selected===i) {
            return setselected(null)
        }

        setselected(i)
    }


    return(

        <div className='fqs'>


            <div className='fqs-w'>

            <div className='fqs-h'><h2>Frequently asked questions</h2></div>

                <div className="accordion">
                    {data.map((itm,i)=>(
                        <div className="f-item">
                            <div className="f-title" onClick={()=>toggle(i)}>
                                <h2>{itm.q}</h2>
                                
                            </div>
                            { selected === i && <div className="f-content"><hr /><br /><p>{itm.a}</p></div>}
                        </div>
                    ))}
                </div>

            </div>

        </div>

    );


}

const data = [{
    q : "What will Zomato charge me for creating a page on its platform?",
    a : "Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges."
},{
    q : "I have a large fleet of delivery boys, why should I use Zomato’s delivery service?",
    a : "You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction."
},{
    q : "What happens if the average order value of Zomato orders is very low?",
    a : "Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food."
},
{
    q : "What all documents are required for registering on online ordering?",
    a : "Registration for online ordering requires : FSSAI certificate (application no. if FSSAI is not present),PAN Card,GST certificate (if applicable) "
},]
import React from 'react'
import ProductDetails from './ProductDetails'
import "./products.css"
const OrderOnline = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
    
  return (
    <div>
        <ProductDetails />

        <div className="ssffcontainer">
   <hr  />
<div className="ssfforderdisplay">
<div className="ssffleftbox box">
    {obj.category.map((e)=>(
        <div style={{color:"dimgray",marginTop:"10px"}}>{e} {"("}{Math.round(Math.random()*(50-10)+10)}{")"}</div>
    ))}
</div>
   <div className="ssffrightbox box">
       <div className="ssffdiv_margin"> 
           
       <div className="ssffright_oder">
           <div>
               <h1>Order Online</h1>
               <p><span className="iconify" data-icon="prime:compass"></span>Live tracking not available |<span className="iconify" data-icon="prime:compass"></span> 30 min</p>
           </div>
           <div>
               <input type="text"  placeholder="Search within menu" />
           </div>
       </div>
       <input type="checkbox"  /><span>veg only</span>
   <h1>Recommended</h1>
   {obj.dish.map((e)=>(

       <div className="ssffdish_div box">

           <div className="ssffdish_img_div box">
               <img  src={e.img}  />
           </div>
           <div>
               <h4>{e.title}</h4>
               <p><span className="iconify" data-icon="emojione:star"></span><span className="iconify" data-icon="emojione:star"></span><span className="iconify" data-icon="emojione:star"></span><span className="iconify" data-icon="carbon:star"></span><span className="iconify" data-icon="carbon:star"></span>{e.rating}</p>
           <p>₹{e.price}</p>
           <p>{e.description}</p>


           </div>
       </div>
   ))}
              </div>
      




   </div>
</div>
   
            </div>

    </div>
  )
}

export default OrderOnline
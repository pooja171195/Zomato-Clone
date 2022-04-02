import React from 'react'
import ProductDetails from './ProductDetails'
import "./products.css"
const Photos = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
    
  return (
    <div>
          <ProductDetails />

          <div className="ssffcontainer box" >
        <hr   />
        <div className="ssffflex ssffd_margin" >
            <div><button className="btn btn-danger">All{"("}{Math.round(Math.random()*(50-10)+10)}{")"}</button></div>
            <div><button className="btn btn-danger">Safety Practices{"("}{Math.round(Math.random()*(50-10)+10)}{")"}</button></div>
            <div><button className="btn btn-danger">Food{"("}{Math.round(Math.random()*(50-10)+10)}{")"}</button></div>
           
        </div>
        <div className="ssffphotos_div">
{obj.photos.map((e)=>(
    <div>
        <img src={e} />
    </div>
))}
        </div>
              </div>
    </div>
  )
}

export default Photos
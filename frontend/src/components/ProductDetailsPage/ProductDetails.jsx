import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./products.css"


const ProductDetails = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
   

     

  return (
    <div className="ssffcontainer">

        <div className="ssffimg_container box" >
 <div className="ssffimg1">
     <img style={{height:"100%",width:"100%" }}  src={obj.img1} />
 </div>

 <div className="ssffimg2">
 <div className="ssffimg_div1 box">
     <div >
         <img style={{height:"100%",width:"100%" }}  src={obj.img2}   />
     </div>
     <div className="ssffcontainer1">
     <img src={obj.img1} style={{height:"100%",width:"100%"}}  />
     <div className="ssffcentered">View Gallery</div>
         </div>  
 </div>
 <div className="ssffimg_div2 box">
     <div >
     <img style={{height:"100%",width:"100%" }}  src={obj.img3}   />
     
     </div>
     <div className="ssffcontainer2">
     <img src={obj.img1} style={{height:"100%",width:"100%"}}  />
     <div className="ssffcentered">
     <span className="iconify ssffsize" data-icon="fluent:camera-add-24-regular"></span><br />
         Add Photos</div>
         
         </div>  
 </div>
 </div>


        </div>


        <div>
          <div>
                    <h1>{obj.name}</h1>
           </div>
           
            <div className="ssffhover">
                {obj.category.map((e,i)=>(
                   <span key={i}>{e}, </span> 
                ))}
            </div>
            <div>
                <p>{obj.location}</p>
            </div>
            <div>
                <p>Open now10am – 12midnight (Today)</p>
            </div>
            <div className="ssffbuttons">
           <div><button className="btn btn-danger">Add Review</button></div>
           <div><button className="btn btn-outline-secondary" >Direction</button></div>
           <div><button className="btn btn-outline-secondary">Bookmark</button></div>
           <div><button className="btn btn-outline-secondary">Share</button></div>
            </div>


        </div>

        <div className="ssffdetailContainer"> 
        <div className="ssfflinks">
       <div>
        <Link style={{textDecoration: 'none', fontSize:"25px",color:"grey"}} to="/overview">Overview</Link>
       </div>
       <div>
       <Link style={{textDecoration: 'none', fontSize:"25px",color:"grey"}} to="/orderonline">Order Online</Link>
       </div>
       <div>
       <Link style={{textDecoration: 'none', fontSize:"25px",color:"grey"}} to="/reviews">Reviews</Link>
       </div>
       <div>
       <Link style={{textDecoration: 'none', fontSize:"25px",color:"grey"}} to="/photos">Photos</Link>
       </div>
       <div>
       <Link style={{textDecoration: 'none', fontSize:"25px",color:"grey"}} to="/menu">Menu</Link>
       </div>

        </div>
        
         </div>


    </div>
  )
}

export default ProductDetails
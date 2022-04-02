import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import "./products.css"

const Overview = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
    
  return (
    <div > 
<ProductDetails />
  
  <div className="ssffcontainer">
      <hr />
      <h2>{obj.overview.about}</h2>
      <h3>Menu</h3>
      <img src={obj.overview.menuimg}  />
      <div>
      <p>Food Menu</p>
      <p>{obj.overview.pages}</p>
      </div>
      <h3>Cuisines</h3>
      <div className="ssffcusines">
      {obj.overview.cuisines.map((e,i)=>(
          <div >
             <Link style={{textDecoration: 'none',color:"green"}} key={i} to={""} >{e}</Link>
          </div>
         
      ))}
      </div>

<div className="ssffmargin">
<h3>People Say This Place Is Known For</h3>
<p>Unlimited Refills, Plenty of Vegetarian Options, Drive through, Office Crowd, Good Portions, Cozy Ambiance</p>
</div>

<div className="ssffmargin">
<h3>Average Cost</h3>
<p>{obj.overview.averagecost}{")"}</p>
</div>
    
<div className="ssffmargin">
<h3>More Info</h3>
<div className="ssffinfo">
{obj.overview.moreinfo.map((e)=>(

<div>
<span className="iconify ssffcolor" data-icon="fluent:presence-available-20-regular"></span>
<span>{e}</span>
</div>

))}
</div>

</div>
     
  </div>
    </div>
  )
}

export default Overview
import React from 'react'
import ProductDetails from './ProductDetails'

const Menu = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
    
  return (
    <div>
         <ProductDetails />
         <div className="ssffcontainer">
  <hr  />
  <h1>{obj.name}{"  "} Menu</h1>
  <img src={obj.menu.img} />
  <h4>Food Menu</h4>
  <p>{obj.menu.menu}</p>

  <div className="ssffmenu_div_1">
      <h5>RELATED TO {obj.name}, {obj.location}</h5>
      <p>{obj.menu.about}</p>
  </div>

  <div className="ssffmenu_div_2">
      <h5>RESTAURANTS AROUND  {obj.location}</h5>
      <p>{obj.menu.location}</p>
  </div>

  <div className="ssffmenu_div_2">
      <h5>FREQUENT SEARCHES LEADING TO THIS PAGE</h5>
      <p>{obj.menu.searches}</p>
  </div>

  <div className="ssffmenu_div_2">
      <h5>TOP STORES</h5>
      <p>{obj.menu.topstores}</p>
  </div>


             </div>

    </div>
  )
}

export default Menu
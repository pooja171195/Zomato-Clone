import React from 'react'
import ProductDetails from './ProductDetails'
import "./products.css"
const OrderOnline = () => {
    let obj= {
        id:1,
       name:"EatFit",
        img:"https://b.zmtcdn.com/data/pictures/8/19802838/99615ec8704780015566e2d74a58251b_o2_featured_v2.jpg",
       category:["Mithai", "North Indian", "Pizza", "Burger", "Fast Food", "Street Food", "Beverages"],
       averagecost:"₹200 for one",
       img1:"https://b.zmtcdn.com/data/pictures/3/18548293/9e2c94c80c5cd461f89cefbfcb544c24.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            img2:"https://b.zmtcdn.com/data/pictures/chains/3/18548293/c38ff90d9a1fb8db69e4090bac0d6f3d.jpg?fit=around|300:273&crop=300:273;*,*",
            img3:"https://b.zmtcdn.com/data/pictures/chains/3/18548293/27af747616bcb4e82e52cdd34d50023c.jpg?fit=around|300:273&crop=300:273;*,*",
             location:"Cunningham Road, Bangalore",
         dish:[
             {
                 img:"https://b.zmtcdn.com/data/dish_photos/4f9/c164f1abfc6b3e9ea4e67538c19074f9.jpg?fit=around|130:130&crop=130:130;*,*",
                 title:"Butter Paneer Kulcha Burger",
                 rating: "10 votes",
                 price:"₹219",
                 description:"Our Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together. Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg."
             },
             {
                img:"https://b.zmtcdn.com/data/dish_photos/4f9/c164f1abfc6b3e9ea4e67538c19074f9.jpg?fit=around|130:130&crop=130:130;*,*",
                title:"Butter Paneer Kulcha Burger",
                rating: "10 votes",
                price:"₹219",
                description:"Our Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together. Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg."
            },
            {
                img:"https://b.zmtcdn.com/data/dish_photos/4f9/c164f1abfc6b3e9ea4e67538c19074f9.jpg?fit=around|130:130&crop=130:130;*,*",
                title:"Butter Paneer Kulcha Burger",
                rating: "10 votes",
                price:"₹219",
                description:"Our Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together. Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg."
            },
            {
                img:"https://b.zmtcdn.com/data/dish_photos/4f9/c164f1abfc6b3e9ea4e67538c19074f9.jpg?fit=around|130:130&crop=130:130;*,*",
                title:"Butter Paneer Kulcha Burger",
                rating: "10 votes",
                price:"₹219",
                description:"Our Indian touch to burger with regional favourites - kulcha and butter paneer masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies together. Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg."
            }
         ],
    
         overview:{
             about:"About this place",
             menuimg:["https://b.zmtcdn.com/data/menus/293/18548293/29326e520a197f19cc568c0440a50b71.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"],
             
             pages:"4 pages",
             cuisines:["Mithai", "North Indian", "Pizza", "Burger", "Fast Food", "Street Food", "Beverages"],
             averagecost:"₹200 for one(approx.",
             moreinfo:["Delivery Only"," Desserts and Bakes"," No Seating Available"]
         },
    
         reviews:[
             {
      name:"Shahab Ansari",
      reviews:1,
      followers:2,
      rating:5,
      delivery:"3 days ago",
      comment:"I love it my love is very happy"
             },
             {
    
             }
         ],
    
         photos:[
             "https://b.zmtcdn.com/data/pictures/chains/3/18548293/c38ff90d9a1fb8db69e4090bac0d6f3d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
             "https://b.zmtcdn.com/data/pictures/chains/3/18548293/fb16d8b92b5574f55a5c2b27a6bea772.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
             "https://b.zmtcdn.com/data/pictures/chains/3/18548293/0918404633b8ce795199c9c3dbd0c7b7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
         ],
         menu:{
             img:"https://b.zmtcdn.com/data/menus/293/18548293/29326e520a197f19cc568c0440a50b71.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
             menu:"4 pages",
             about:"Restaurants in Bangalore, Bangalore Restaurants, Cunningham Road restaurants, Best Cunningham Road restaurants, Central Bangalore restaurants, in Bengaluru, near me, in Central Bangalore, in Cunningham Road, in Bengaluru, near me, in Central Bangalore, in Cunningham Road, Order food online in Cunningham Road, Order food online in Bengaluru, Order food online in Central Bangalore, New Year Parties in Bengaluru, Christmas' Special in Bengaluru",
              location:"Vasanth Nagar restaurants, Infantry Road restaurants, Race Course Road restaurants, Shivajinagar restaurants",
              searches:"eatfit menu, eatfit cunningham road menu, eatfit bangalore, eatfit bangalore menu, eatfit restaurant",
              topstores:"Hosur Road, BTM, Hennur, Rajajinagar, Koramangala 4th Block, Electronic City, Banaswadi, Yelahanka"
         }
    
    
        
        }
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

       <div className="ssffdish_div">

           <div className="ssffdish_img_div">
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
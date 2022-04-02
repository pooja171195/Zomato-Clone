import React from 'react'
import { Zfooter } from '../zfooter/zfooter'
import ProductDetails from './ProductDetails'
import "./products.css"
const Reviews = () => {
    let obj=JSON.parse(localStorage.getItem("OrderItem"))
   

        let avatar=[{profileImage:"https://robohash.org/maioresipsaminventore.png?size=50x50&set=set1"},
        {profileImage:"https://robohash.org/temporaipsamrepellendus.png?size=50x50&set=set1"},
        {profileImage:"https://robohash.org/isteperferendiset.png?size=50x50&set=set1"},
        {profileImage:"https://robohash.org/praesentiumnonquo.png?size=50x50&set=set1"},
        {profileImage:"https://robohash.org/quietfugit.png?size=50x50&set=set1"}]
  return (
    <div>
          <ProductDetails />
          
        <div className="ssffcontainer ssffflex box">
   <div className="ssffleft_review">
     <h1>{obj.name} Reviews</h1>
   
   <div className="ssffselect_div">
       <div style={{marginRight:"200px"}}>
       <select className="form-select" aria-label="Default select example">
  <option selected>All Reviews</option>
  
  <option value="2">Following</option>
  <option value="3">popular</option>
  <option value="3">Bloggers</option>
  <option value="3">My reviews</option>
  <option value="3">Order Reviews</option>
</select>
       </div>
       <div>
       <select class="form-select" aria-label="Default select example">
  <option selected>Newest First</option>
  <option value="1">OldestFirst</option>
  <option value="2">Highest Rated</option>
  <option value="3">Lowest Rated</option>
</select>
       </div>
   </div>
    {obj.reviews.map((e)=>(
  <div style={{marginTop:"20px"}}>
  <div className="ssffflex">
      <div>
          <img src="https://robohash.org/maioresipsaminventore.png?size=50x50&set=set1" />
      </div>
      <div>
          <h5>{e.name}</h5>
          <div className="ssffflex">
              <div style={{marginRight:"20px"}}>
                  <p>{e.reviews} reviews</p>
              </div>
              <div>
              <p>{e.followers} followers</p>
              </div>
          </div>
      </div>
      <div style={{ marginLeft:"150px"}}><button type="button" class="btn btn-outline-danger">Follow</button></div>
  </div>
 

  <div className="ssffflex">
              <div className="button_size" style={{marginRight:"20px"}}>
                  <button  className="bbtn btn-success">{e.rating}<span class="iconify" data-icon="carbon:star"></span></button>
              </div>
              <div>
              <p>DELIVERY {e.delivery}</p>
              </div>
          </div>

          <p>0 Votes for helpful, 0 Comments</p>
          <div className="ssffflex ssffmargin_share">
              <div><span class="iconify" data-icon="ant-design:like-outlined"></span>Helpful</div>
              <div><span class="iconify" data-icon="ic:outline-comment"></span>Comment</div>
              <div><span class="iconify" data-icon="cil:share"></span>Share</div>
          </div>

          <hr  />

  
</div>

    ))}
  
     
   </div>
   <div></div>

        </div>
        <Zfooter />
    </div>
  )
}

export default Reviews
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./floating_div.css"
const Floating_div = () => {
const navigate = useNavigate()
    const  handleLocation =()=>{
navigate("/mobilepage")
    }
  return (
    <div className="ssfgg23_div box"> 
   <div className="sssffgg_inner_div1">
       <h5>Online ordering is only supported on the mobile app</h5>
    <button onClick={()=>{
        handleLocation()
    }} style={{backgroundColor:"white",borderRadius:"10px",padding:"5px 20px",fontSize:"13px",marginTop:"10px",marginLeft:"10px"}}><b>Download the App</b></button>
   </div>
   <div className="sssffgg_inner_div2">
       <img style={{height:"77%",width:"80%",marginTop:"40px",border:"none"}} src="https://b.zmtcdn.com/web/assets2ddb28beed453a23b571279486a51c5d1638438756.png" />
   </div>

    </div>
  )
}

export default Floating_div
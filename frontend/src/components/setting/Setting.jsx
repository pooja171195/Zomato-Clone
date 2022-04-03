import React from 'react'
import './Setting.css'
function Setting() {
  return (
    <div>
        <div className='mainDivByOm'>
            <div className="leftByOm">
                <div onClick={()=>{}}><p>Notifications</p></div>
                <div><p>Privacy & Security</p></div>
            </div>
            <div className="rightByOm">
                <div  style={{display:"flex", justifyContent:"space-between" }}>
                    <div>
                        <h1>Notification Preferences</h1>
                        <p>Receive updates related to order status, promo codes and more</p>
                    </div>
                    <div ><button className="save" style={{margin:"60px", width:"60px",height:"30px", backgroundColor:"#ff0000"}}>Save</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Setting
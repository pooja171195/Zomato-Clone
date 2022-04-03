import React from 'react'
import { useState } from 'react'
import './Profile.css'
function Profile() {
    const [Review,setReview]=useState(5);
    const [Photos,setPhotos]=useState(0);
    const [Followers,setFollowers]=useState(20)
  return (    
        <div className='banner'>
{/* profile picture code */}
            <div className='image'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIy2vRwSRoUACatub962auO36Uo5OjNQ5wCQ&usqp=CAU" alt="" />
                <p>Om Prakash</p>
            </div>
           {/* Review, edit ,followers etc*/}
            
            <div className='right'>
                <div className='edit'>  <button > <img src="data:image/png;base64,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" alt="" />
                    Edit Profile</button> </div>
                <div  className='inner'>
                <div>{Review}<br/> Review </div>
                <div className='vl'></div>
                <div >{Photos}<br/>Photos</div>
                <div className='vl'></div>
                <div>{Followers}<br/>Followers</div>
                </div>
          </div>
        </div>
    
  )
}

export default Profile
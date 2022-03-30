import React from 'react'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div className='App' style={{
        display:"flex",
        justifyContent:'space-around'
     
        }} >
     
      <ul>Home</ul>
      <ul><Link to={'/login'}>Login</Link></ul>
      <ul>SignUp</ul>
     
        </div>
  )
}

export default Home
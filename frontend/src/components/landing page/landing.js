import React from 'react'
import "./landing.css";

export const landing = () => {
  return (
    <div id='body'>
    <Header/>
    <Card 
        className='section'
        img='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
        />
        </div>
        );
}
const Header = () =>{
    return(
        <div className='header'>


            </div>

    );
}
const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            
        </div>
    )
}


// import React, {useState} from 'react';
// import './search.css';

// export const search = () => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [searchInput] = useState("");
   
//    const handleChange = (e) => {
//      e.preventDefault();
    
//    };
 
   
//    return <div className='div1'>
//        <select className='option1'
//    value={"add your value here"}  // add value here
//    onChange={(e) => {handleChange(e)}}
//  >
//    <option value="">Allahabad</option>
//    <option value="Detect">Detect current location</option>
//    <option value="AddLocation">+ Add Location</option>
   
//  </select>
//  <hr className='M'/>
//    <input
//    className='search-bar1'
   
//       type="search"
//       placeholder="Search for restaurant, cuisine or a dish"
//       onChange={handleChange}
//       value={searchInput} />
   
//    </div>
   
 
//    };
//    export default search;
import React from "react";

import "./search.css";

const Header = () => {


  return (
    <div className="header max-width">
     
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <span
                style={{ fontSize: "1.5em", color: "#d92662" }}
                class="iconify"
                data-icon="ci:location"
              ></span>
              <div>Allahabad</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <span
              style={{ fontSize: "2em" }}
              class="iconify"
              data-icon="ei:search"
            ></span>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        {/* <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Shuvam</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div> */}
      </div>
    </div>
  );
};

export default Header;


import React, {useState} from 'react';
import './search.css';

export const search = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchInput] = useState("");
   
   const handleChange = (e) => {
     e.preventDefault();
    
   };
 
   
   return <div className='div1'>
       <select className='option1'
   value={"add your value here"}  // add value here
   onChange={(e) => {handleChange(e)}}
 >
   <option value="">Allahabad</option>
   <option value="Detect">Detect current location</option>
   <option value="AddLocation">+ Add Location</option>
   
 </select>
 <hr className='M'/>
   <input
   className='search-bar1'
   
      type="search"
      placeholder="Search for restaurant, cuisine or a dish"
      onChange={handleChange}
      value={searchInput} />
   
   </div>
   
 
   };
   export default search;
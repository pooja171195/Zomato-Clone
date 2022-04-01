import React  from 'react';
import {useState,useEffect} from 'react';
import HomePage from './pages/home';
import axios from 'axios';

import { Route, Routes } from 'react-router';
import Overview from './components/ProductDetailsPage/Overview';
import OrderOnline from './components/ProductDetailsPage/OrderOnline';
import Reviews from './components/ProductDetailsPage/Reviews';
import Photos from './components/ProductDetailsPage/Photos';
import Menu from './components/ProductDetailsPage/Menu';



const App = () => {
  const [data, setData] = useState(null);

  

  return(

 
    
    <Routes>

      <Route  path={"/"}  element={<HomePage />} />
      <Route  path={"/orderonline"} element={<OrderOnline />} />
      <Route  path={"/overview"} element={<Overview />} />
      <Route  path={"/reviews"} element={<Reviews />} />
      <Route  path={"/photos"} element={<Photos />} />
      <Route  path={"/menu"} element={<Menu />} />

    </Routes>
 
   
  )
 
};

export default App;

// AllRoute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './Pages/Product';
import Login from './Pages/Login';
import PrivatePage from './Components/PrivatePage';
import Aboute from './Pages/Aboute';
import Home from './Pages/Home';
import Productdetail from './Components/Productdetail';

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboute />} />
      <Route
        path='/product'
        element={
          <PrivatePage>
            <Product />
          </PrivatePage>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/product/:id'
        element={
          <PrivatePage>
            <Productdetail />
          </PrivatePage>
        }
      />
    </Routes>
  );
};

export default AllRoute;

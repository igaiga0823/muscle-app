import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import None from './components/pages/None';

import Fetch from './Fetch';
import Test from './components/test';

import Login from './components/views/Login'; 
import AppBar from './components/parts/AppBar';
import RateGraph from './components/views/graphs/RateGraph';
import Register from './components/views/Register';
import Info from './components/parts/DateSend';

const  App = () => {
  return (
    <div className="App">

      {/* <AppBar />  */}
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<None />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/test" element={<Test />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/loginform" element={<Login />} />
          <Route path="/appbar" element={<AppBar />} />
          <Route path="/rategraph" element={<RateGraph />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
};

export default App;


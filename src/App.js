import './css/App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";


import Fetch from './Fetch';
import Fetch1 from './Fetch1';
import LoginForm1 from './components/LoginForm1';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>


      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" elemet={<log_form/>}/> */}
          <Route path="/login1" element={<LoginForm1 />} />
        </Routes>
      </BrowserRouter>
      

      <Fetch /> 
---


      <Fetch1 />

    </div>
  );
};

export default App;


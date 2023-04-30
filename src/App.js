import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";



import Fetch1 from './Fetch1';
//import LoginForm1 from './components/LoginForm1';
import Home from './components/Home';
import Test from './components/test';

import Login from './components/views/Login';
import AppBar from './components/parts/AppBar';
import AppBar1 from './components/parts/AppBar1';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          {/* <Route path="/login1" element={<LoginForm1 />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/fetch" element={<Fetch1 />} />
          <Route path="/loginform" element={<Login />} />
          <Route path="/appbar1" element={<AppBar1 />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
};

export default App;


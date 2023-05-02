import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import None from './components/pages/None';

import Fetch1 from './Fetch1';
import Test from './components/test';

import Login from './components/views/Login'; 
import AppBar from './components/parts/AppBar';
import Graph from './components/views/Graph';

function App() {
  return (
    <div className="App">

      {/* <AppBar /> */}
      <BrowserRouter>
        <Routes> 
        <Route path="/" element={<None />} />
          {/* <Route path="/login1" element={<LoginForm1 />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/fetch" element={<Fetch1 />} />
          <Route path="/loginform" element={<Login />} />
          <Route path="/appbar" element={<AppBar />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
};

export default App;


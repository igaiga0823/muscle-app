import './css/App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import One from './components/test'
import Two from './components/test2'


import Fetch from './Fetch';
import Fetch1 from './Fetch1';


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <BrowserRouter>
        <Routes> 
          <Route path="/login" elemet={<log_form/>}/>
        </Routes>
      </BrowserRouter>
      <div></div>
      <Fetch /> 

      ---
      <Fetch1 />

    </div>
  );
}

export default App;


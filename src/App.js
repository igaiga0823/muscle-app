import './css/App.css';
import './css/reset.css';

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";



import Fetch1 from './Fetch1';
//import LoginForm1 from './components/LoginForm1';
import Home from './components/Home';
import Test from './components/test';
import LoginForm1 from './components/views/LoginForm1';
import SendPass from './components/views/SendPass';
//import AppBar from './components/parts/AppBar';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>


      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          {/* <Route path="/login1" element={<LoginForm1 />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/fetch" element={<Fetch1 />} />
          <Route path="/loginform" element={<SendPass />} />
          {/* <Route path="/appbar" element={<AppBar />} /> */}
        </Routes>
      </BrowserRouter>



    </div>
  );
};

export default App;


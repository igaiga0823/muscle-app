import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import None from './components/pages/None';

import Fetch from './Fetch';

import Login from './components/views/Login'; 
import AppBar from './components/parts/AppBar';
import RateGraph from './components/views/graphs/RateGraph';
import Register from './components/views/Register';
import Test from './components/parts/test';
import LineChart from './components/views/graphs/WeightGraph';

import Home from './components/pages/Home';
import Training from './components/pages/Training';
import Friend from './components/pages/Friend';
import Weight from './components/pages/Weight';
import TestSend from './components/parts/testSend';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff7f',
    },
  },
});



const  App = () => {
  return (
    

      <div className="App">

     {/* <AppBar />  */}

      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <AppBar />
      </ ThemeProvider>
          <Routes> 
            <Route path="/" element={<None />} />
            <Route path="/home" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/friend" element={<Friend />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/test" element={<Test />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/login" element={<Login />} />

            <Route path="/appbar" element={<AppBar />} />

            <Route path="/rategraph" element={<RateGraph />} />
            <Route path='/weight' element={<LineChart />} />
            <Route path='/testsend' element={<TestSend />} />
          </Routes>
        </BrowserRouter>
 
      </div>







  );
};

export default App;


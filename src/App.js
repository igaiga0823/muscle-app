import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import None from './components/pages/None';

import Fetch from './Fetch';

import Login from './components/views/Login'; 
import WeightForm from './components/views/WeightForm'; 
import AppBar from './components/parts/AppBar';
import RateGraph from './components/views/graphs/RateGraph';
import Register from './components/views/Register';
import Test from './components/parts/test';
import Menu from './components/parts/AddMenu';

import WeightGraph from './components/views/graphs/WeightGraph';
import PieChart from './components/views/graphs/pieChart';

import Home from './components/pages/Home';
import Training from './components/pages/Training';
import Friend from './components/pages/Friend';
import Data from './components/pages/Data';
import TestSend from './components/parts/testSend';
import ViewUploadVideo from './components/parts/friend/ViewUploadVideo';

import ViewVideo from './components/views/friend/ViewVideo';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// 
import { createContext, useContext } from 'react'
import UserInfo from './hooks/UserInfo'

export const UserContext = createContext()


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
    <UserContext.Provider value={UserInfo()}>


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
            <Route path="/data" element={<Data />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/test" element={<Test />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Menu" element={<Menu />} />

            <Route path="/appbar" element={<AppBar />} />
            <Route path="/weightForm" element={<WeightForm/>} />
            <Route path="/rategraph" element={<RateGraph />} />
            <Route path='/weightgraph' element={<WeightGraph/>} />
            <Route path='/piechart' element={<PieChart/>} />
            <Route path='/testsend' element={<TestSend />} />
            <Route path='/viewuploadvideo' element={<ViewUploadVideo />} />
            <Route path='/viewvideo' element={<ViewVideo />} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
 
      </div>







  );
};

export default App;


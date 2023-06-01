import './css/App.css';
import './css/reset.css'

import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

import None from './components/pages/None';

import Fetch from './Fetch';

import Login from './components/views/Login'; 
import LoginCheck from './components/function/LoginCheck'
import Logout from './components/function/Logout'

import WeightForm from './components/parts/WeightForm'; 
import AppBar from './components/parts/AppBar';
import RateGraph from './components/views/graphs/RateGraph';
import Register from './components/views/Register';
import TrainingForm from './components/parts/data/TrainingForm';
import Menu from './components/parts/data/AddMenu';

import WeightGraph from './components/views/graphs/WeightGraph';
import PieChart from './components/views/graphs/pieChart';

import Home from './components/pages/Home';
import Training from './components/pages/Training';
import Friend from './components/pages/Friend';
import Data from './components/pages/Data';
import TestSend from './components/parts/data/testSend';
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
      <BrowserRouter>
      <LoginCheck/>
      <Logout />

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
            <Route path="/trainingform" element={<TrainingForm />} />
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


import 'css/App.css';
import 'css/reset.css'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import None from 'components/pages/None';

import Fetch from 'Fetch';

import Login from 'components/views/Login';
import LoginCheck from 'components/function/LoginCheck'
import Logout from 'components/function/Logout'

import WeightForm from 'components/parts/WeightForm';
import AppBar from 'components/parts/AppBar';
import RateGraph from 'components/views/graphs/RateGraph';
import Register from 'components/views/Register';
import TrainingForm from 'components/parts/data/TrainingForm';
import Menu from 'components/parts/data/AddMenu';
import Parts from 'components/parts/data/AddParts';

import WeightGraph from 'components/views/graphs/WeightGraph';
import PieChartMenu from 'components/views/graphs/pieChartMenu';
import PieChartParts from 'components/views/graphs/pieChartParts';

import Home from 'components/pages/Home';
import Training from 'components/pages/Training';
import Friend from 'components/pages/Friend';
import Data from 'components/pages/Data';


import ViewUploadVideo from 'components/parts/friend/ViewUploadVideo';

import ViewVideo from 'components/views/friend/ViewVideo';
import UserSearch from 'components/parts/friend/UserSearch';
import RecieveFriendRequest from 'components/parts/friend/RecieveFriendRequest';



import { ThemeProvider, createTheme } from '@mui/material/styles';

import Test from 'components/test';
// 
import { createContext, useContext } from 'react'
import UserInfo from 'hooks/UserInfo'


export const UserContext = createContext()



const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff7f',
    },
  },
});



const App = () => {

  return (




    <Box textAlign={"center"}>

      <UserContext.Provider value={UserInfo()}>
        <BrowserRouter>
          <LoginCheck />
          <Logout />

          <ThemeProvider theme={theme}>
            <AppBar />
          </ ThemeProvider>

          <Routes>

            <Route path="/" element={<None />} />
            <Route path="/home" element={<Home />} />
            <Route path="/data" element={<Data />} />
            <Route path="/training" element={<Training />} />
            <Route path="/friend" element={<Friend />} />

            <Route path="/register" element={<Register />} />
            <Route path="/trainingform" element={<TrainingForm />} />
            <Route path="/fetch" element={<Fetch />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/parts" element={<Parts />} />

            <Route path="/test" element={<Test />} />

            <Route path="/appbar" element={<AppBar />} />
            <Route path="/weightForm" element={<WeightForm />} />
            <Route path="/rategraph" element={<RateGraph />} />
            <Route path='/weightgraph' element={<WeightGraph />} />
            <Route path='/piechart' element={<PieChartMenu />} />
            <Route path='/piechartparts' element={<PieChartParts />} />_
            <Route path='/viewuploadvideo' element={<ViewUploadVideo />} />
            <Route path='/viewvideo' element={<ViewVideo />} />
            <Route path='/usersearch' element={<UserSearch />} />
            <Route path='/recievefriendrequest' element={<  RecieveFriendRequest />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Box>








  );
};

export default App;


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
    mode: 'light',
    primary: {
      // main: '#00ff7f',
      main: '#2f4f4f',
    },
  },

});

const themeAppBar = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00ff7f',

    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "-0.035em"
    },
    h2: {
      fontSize: "1.65rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "-0.03em"
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "-0.025em"
    },
    h4: {
      fontSize: "1.25rem",
      lineHeight: 1.5,
      letterSpacing: "-0.02em"
    },
    body1: {
      lineHeight: 1.7,
      letterSpacing: "0.05em"
    },
    caption: {
      fontSize: "0.85rem",
      lineHeight: 1.75,
      letterSpacing: "0.075em"
    },
    button: {
      fontSize: "0.85rem",
      fontWeight: 500
    },
    fontFamily: "'Noto Sans JP', sans-serif"
  }
});





const App = () => {

  return (

    // #15171e


    <Box bgcolor={"#E0E5C1"} textAlign={"center"} height={"100vh"}>

      < UserContext.Provider value={UserInfo()} >
        <BrowserRouter>
          <LoginCheck />
          <Logout />

          <ThemeProvider theme={themeAppBar}>
            <AppBar />
          </ThemeProvider>

          <ThemeProvider theme={theme}>
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
          </ ThemeProvider>
        </BrowserRouter>
      </UserContext.Provider >
    </Box >








  );
};

export default App;


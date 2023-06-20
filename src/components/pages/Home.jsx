import React from 'react';
import 'css/Home.css'
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Box
        sx={{
          backgroundColor: 'rgba(75, 0, 130, 0.8)',
          borderRadius: '1.25em',
          boxShadow: '0 0 .5em rgba(0, 0, 0, .5)',
          boxSizing: 'border-box',
          left: '50%',
          padding: '6vmin',
          position: 'fixed',
          textAlign: 'center',
          top: '48%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h1 style={{ color: '#F8F8FF' }} >ようこそ Muscle Appへ!</h1>
      </Box>
    </div>
  );
};

export default Home;

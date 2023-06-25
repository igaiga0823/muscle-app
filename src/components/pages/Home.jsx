import React from 'react';
import 'css/Home.css'
import { Box, TextField, Autocomplete, Button, Alert, Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box

          >
            <h1 >ようこそ Muscle Appへ!</h1>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box

          >
            <h1 >ようこそ Muscle Appへ!</h1>
          </Box>
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={8}>

        </Grid>
      </Grid>

    </div >
  );
};

export default Home;

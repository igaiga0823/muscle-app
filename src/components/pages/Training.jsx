import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "App.js";
import During from "components/parts/data/During";
import { Box, TextField, Autocomplete, Button, Alert, SpeedDial, SpeedDialIcon, SpeedDialAction, Typography, Modal } from "@mui/material";

import "css/Training.css";
import ViewTimeLapse from "components/views/video/ViewTimeLapse";

const Training = () => {
  const context = useContext(UserContext);

  return (
    <>
      <ViewTimeLapse />
    </>


  );
};

export default Training;

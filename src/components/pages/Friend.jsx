import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";
import 'css/Training.css'

import UserSearch from 'components/parts/friend/UserSearch';


const Friend = () => {
    return (
        <div className="area" >
            <Box bgcolor={"white"} marginTop={7} marginX={3} paddingTop={3} paddingX={1} borderRadius={3}>
                <UserSearch />
            </Box>
        </div>



    )
};

export default Friend;
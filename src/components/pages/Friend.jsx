import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";


import UserSearch from 'components/parts/friend/UserSearch';
import RecieveFriendRequest from 'components/parts/friend/RecieveFriendRequest';
import ViewUploadVideo from 'components/parts/friend/ViewUploadVideo';

const Friend = () => {


    return (
        <Box justifyContent={"center"}>

            <Box bgcolor={""} maxWidth={"400px"} marginTop={7} marginX={3} paddingTop={3} paddingX={1} borderRadius={1}>
                <UserSearch />

            </Box>
            <Box maxWidth={"400px"} marginTop={1} marginX={3} paddingTop={1} paddingX={1} borderRadius={1}>

                < RecieveFriendRequest />


            </Box>
            <Box maxWidth={"400px"} marginTop={1} marginX={3} paddingTop={1} paddingX={1} borderRadius={1}>

                < ViewUploadVideo />


            </Box>


        </Box>



    )
};

export default Friend;
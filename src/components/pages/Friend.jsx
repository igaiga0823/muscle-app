import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";
import 'css/Training.css'

import UserSearch from 'components/parts/friend/UserSearch';
import RecieveFriendRequest from 'components/parts/friend/RecieveFriendRequest';

const Friend = () => {


    return (
        <div className="area" >

            <Box bgcolor={"#272533"} marginTop={7} marginX={3} paddingTop={3} paddingX={1} borderRadius={1}>
                <UserSearch />
                #302c42
            </Box>
            <Box bgcolor={"#272533"} marginTop={1} marginX={3} paddingTop={1} paddingX={1} borderRadius={1}>
                <h3>フレンドリクエスト一覧</h3>
                < RecieveFriendRequest />


            </Box>

        </div>



    )
};

export default Friend;
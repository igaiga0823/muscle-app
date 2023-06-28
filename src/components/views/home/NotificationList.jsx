import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { Box, Stack, Alert, Button, Input } from '@mui/material';
// 以下の相対パスは適宜変更して使ってください。
import { UserContext, ClientContext } from 'App.js';
import NotificationListItem from './NotificationItem';
import "css/Notification.css"

const NotificationList = (props) => {

    const context = useContext(UserContext)
    const client = useContext(ClientContext)
    const navigate = useNavigate();

    // context.user_idでuserのIDが取れるよ

    // navigate("移動したいパス")



    return (
        <Box border={"1px solid white"} margin={1} borderRadius={3}>
            <Box color={client.colorTheme.textColor1} marginTop={1}>新着情報</Box>
            <Stack >
                <NotificationListItem />
                <NotificationListItem />
                <NotificationListItem />
            </Stack>
        </Box>


    );


}

export default NotificationList;
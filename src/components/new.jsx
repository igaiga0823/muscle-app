import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import {Box, Stack, Alert, Button, Input } from '@mui/material';
// 以下の相対パスは適宜変更して使ってください。
import { UserContext } from '../../App.js'; 

const NewComponent = () => {

    const context = useContext(UserContext)
    const navigate = useNavigate();

    // context.user_idでuserのIDが取れるよ

    // navigate.push("移動したいパス")

}

export default NewComponent;
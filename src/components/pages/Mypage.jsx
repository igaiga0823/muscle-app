import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { Box, Stack, Alert, Button, Input } from "@mui/material";
// 以下の相対パスは適宜変更して使ってください。
import { UserContext } from "App.js";

const Mypage = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  // context.user_idでuserのIDが取れるよ

  // navigate("移動したいパス")
};

export default Mypage;

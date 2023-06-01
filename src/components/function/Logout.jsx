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
import { UserContext } from "../../App.js";

const Logout = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const deleteCookie = () => {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };

  // ...

  // 使用例としてログアウト時にクッキーを削除する場合
  const handleLogout = () => {
    context.setIsLogin(false);
    context.setuser_name("");
    context.setuser_id("");
    deleteCookie();
    navigate("/login");
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={handleLogout}>
        Success
      </Button>
    </>
  );
};

export default Logout;

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

const LoginCheck = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();


  // context.user_idでuserのIDが取れるよ

  // navigate.push("移動したいパス")

  const setCookie = (userInfo) => {
    console.log(userInfo);
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 3 hours
    // userInfoオブジェクトの各プロパティをCookieに登録
    Object.entries(userInfo).forEach(([key, value]) => {
      document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
    });
  };

  useEffect(() => {
    const cookies = document.cookie.split(";").reduce((acc, cookie) => {
      const [name, value] = cookie.trim().split("=").map(decodeURIComponent);
      return { ...acc, [name]: value };
    }, {});
    const userIdCookie = cookies.userId;
    const userNameCookie = cookies.userName;

    if (userIdCookie) {
      console.log("クッキーがあります。");
      console.log(userIdCookie);
      console.log(userNameCookie);
      if (!context.isLogin) {
        context.setuser_id(userIdCookie);
        context.setIsLogin(true);
        context.setuser_name(userNameCookie);
      }

      const userInfo = { "userId": userIdCookie, "userName": userNameCookie };
      setCookie(userInfo);
      console.log("ログインしています。");
    } else if (context.isLogin) {
      console.log("context.user_id");
      console.log(context.user_id);
      console.log(context.userName);
      const userInfo = { "userId": userIdCookie, "userName": userNameCookie };
      setCookie(userInfo);
      console.log("ログインしています。");
    } else {
      console.log("ログインしていません。");
      navigate("/login");
    }
  }, [context.isLogin, navigate]);

  const deleteCookie = () => {
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  };
};

export default LoginCheck;

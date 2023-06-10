import React, { useState, useEffect } from "react";

const AsyncGetUserInfo = async (userId) => {
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/user";
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
    }),
  };
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { status: "failed" };
  }
};




export default AsyncGetUserInfo;
import { React, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import USER from "./User";

import GetUserInfo from "./function/common/GetUserInfo";

const Test = () => {
  return (
    <div>
      <button onClick={() => GetUserInfo(1)}>ボタン</button>
    </div>
  );
};

export default Test;

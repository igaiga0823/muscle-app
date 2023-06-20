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

import During from "components/parts/data/During";
import ViewVideo from "./ViewVideo";
import { UserContext } from "App.js";

const ViewTimeLapse = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [startDate, setStartDate] = useState("1890-01-01");
  const [endDate, setEndDate] = useState("2130-01-01");
  const [muscleParts, setMuscleParts] = useState([]);
  const [musclePartsId, setMusclePartsId] = useState([]);
  const [flag, setFlag] = useState(false);

  const fetchUserInfo = async () => {
    try {
      console.log(context.user_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (context.user_id !== "") {
      fetchTimeLapse();
    }
  }, [context.user_id]);

  useEffect(() => {
    fetchUserInfo();
  }, [flag]);

  const handleStartDate = (value) => {
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    setEndDate(value);
  };

  useEffect(() => {
    if (context.user_id !== "") {
      fetchTimeLapse();
    }
  }, [startDate, endDate]);

  const fetchTimeLapse = async () => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/getfriendtimelapse";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: context.user_id,
        start_date: startDate,
        end_date: endDate,
      }),
    };
    console.log(startDate, endDate);
    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      setData(result.datas);
      setFlag(true);
      console.log(result.datas);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <h2>{muscleParts[0]}</h2>
      <During
        onUpdateStartDate={handleStartDate}
        onUpdateEndDate={handleEndDate}
        title={"範囲設定"}
      />

      {flag !== false && data && (
        <div>

          {data.map((item, index) => (
            <ViewVideo data={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewTimeLapse;

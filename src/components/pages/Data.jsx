import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "App.js";
import During from "components/parts/data/During";
import PieChartParts from "components/views/graphs/pieChartParts";
import TransitionChart from "components/views/graphs/TransisionChart";
import TransitionChartParts from "components/views/graphs/TransitionChartParts";
import GetParts from "components/function/common/GetParts";
import GetMenu from "components/function/common/GetMenu";
import GetUserInfo from "components/function/common/GetUserInfo";

const Data = () => {
  const [startDate, setStartDate] = useState("NaN-NaN-NaN");
  const [endDate, setEndDate] = useState("NaN-NaN-NaN");
  const [muscleParts, setMuscleParts] = useState([]);
  const [musclePartsId, setMusclePartsId] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const context = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});
  const [signUpDates, setSignUpDates] = useState("");

  const fetchParts = async () => {
    try {
      console.log(context.user_id);
      const info = await GetParts(Number(context.user_id));
      console.log(info["musclePart"]);
      if (info !== undefined) {
        setMuscleParts(info["musclePart"]);
        setMusclePartsId(info["musclePartId"]);
      }
      const info2 = await GetMenu(Number(context.user_id));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      console.log("userInfoを実行");
      const info = await GetUserInfo(context.user_id);
      setUserInfo(info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (context.user_id !== "") {
      setFlag(true);
    }
  }, [context.user_id]);

  useEffect(() => {
    if (context.user_id !== "") {
      fetchParts();
      console.log(context.user_id);
      fetchUserInfo();
    }
  }, [flag]);

  useEffect(() => {
    try {
      console.log(userInfo.date);
      const d = userInfo.date;
      const e = d.slice(0, 10);
      console.log(e);
      setStartDate(e);
      setFlag2(true);
    } catch (error) {
      console.log(error);
    }
  }, [userInfo]);

  const handleStartDate = (value) => {
    console.log(value);
    setStartDate(value);
  };

  const handleEndDate = (value) => {
    console.log(value);
    setEndDate(value);
  };

  return (
    <div>
      <During
        onUpdateStartDate={handleStartDate}
        onUpdateEndDate={handleEndDate}
        title={"グラフ生成"}
      />
      {/* {flag2 && <PieChartParts startDate={startDate} endDate={endDate} />}
      {musclePartsId &&
        Array.isArray(musclePartsId) &&
        musclePartsId.length > 0 &&
        musclePartsId.map((item, index) => (
          <div>
            <TransitionChart
              startDate={startDate}
              endDate={endDate}
              musclePartId={item}
              musclePart={muscleParts[index]}
              key={index}
            />
          </div>
        ))} */}
      {musclePartsId &&
        Array.isArray(musclePartsId) &&
        musclePartsId.length > 0 &&
        musclePartsId.map((item, index) => (
          <div>
            <TransitionChartParts
              startDate={startDate}
              endDate={endDate}
              musclePartId={item}
              musclePart={muscleParts[index]}
              key={index}
            />
          </div>
        ))}
    </div>
  );
};

export default Data;

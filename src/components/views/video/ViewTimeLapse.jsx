import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Stack,
  Alert,
  Button,
  Input,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
  Modal,
} from "@mui/material";
// 以下の相対パスは適宜変更して使ってください。

import MenuIcon from '@mui/icons-material/Menu';

import During from "components/parts/data/During";
import ViewVideo from "./ViewVideo";
import { UserContext } from "App.js";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '8px', // 角を丸くする
  boxShadow: 24,
  p: 4,
};

const ViewTimeLapse = () => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({});

  const [startDate, setStartDate] = useState("1890-01-01");
  const [endDate, setEndDate] = useState("2130-01-01");
  const [muscleParts, setMuscleParts] = useState([]);
  const [musclePartsId, setMusclePartsId] = useState([]);
  const [flag, setFlag] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <During
            onUpdateStartDate={handleStartDate}
            onUpdateEndDate={handleEndDate}
            title={"範囲設定"}
          />
        </Box>
      </Modal>

      <Box
        sx={{
          position: 'fixed',
          bottom: 70,
          right: 310,
          zIndex: 9999,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            key={"menu"}
            icon={<MenuIcon />}
            tooltipTitle={"menu"}
            onClick={handleOpen}
          />
        </SpeedDial>
      </Box>

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

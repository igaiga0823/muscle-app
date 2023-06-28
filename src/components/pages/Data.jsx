import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { UserContext, ClientContext } from "App.js";
import During from "components/parts/data/During";
import PieChartParts from "components/views/graphs/pieChartParts";
import TransitionChart from "components/views/graphs/TransisionChart";
import TransitionChartParts from "components/views/graphs/TransitionChartParts";
import GetParts from "components/function/common/GetParts";
import GetMenu from "components/function/common/GetMenu";
import GetUserInfo from "components/function/common/GetUserInfo";
import MenuSend from "components/parts/data/AddMenu";
import PartsSend from "components/parts/data/AddParts";
import TrainingForm from "components/parts/data/TrainingForm";

import {
  Box,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Typography,
  Modal,
} from '@mui/material'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import AttributionIcon from '@mui/icons-material/Attribution';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

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

const Data = () => {
  const [startDate, setStartDate] = useState("NaN-NaN-NaN");
  const [endDate, setEndDate] = useState("NaN-NaN-NaN");
  const [muscleParts, setMuscleParts] = useState([]);
  const [musclePartsId, setMusclePartsId] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const context = useContext(UserContext);
  const client = useContext(ClientContext);
  const [userInfo, setUserInfo] = useState({});
  const [signUpDates, setSignUpDates] = useState("");
  const [chart, setChart] = useState(false);
  const [transison1, setTransison1] = useState(false);
  const [transison2, setTransison2] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const style2 = {
    // position: 'absolute',
    // left: "50%",
    // transform: 'translate(-50%, -50%)',
    width: "100%",
    bgcolor: client.colorTheme.frameBgColor,
    borderRadius: '8px', // 角を丸くする
    boxShadow: 24,
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '16px',    // 上のマージン
    marginBottom: '16px', // 下のマージン
  };

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

  const handleChart = () => {
    setChart(!chart)
  }

  const handleTransison1 = () => {
    setTransison1(!transison1)
  }

  const handleTransison2 = () => {
    setTransison2(!transison2)
  }

  return (
    <div>
      <div>
        <Box sx={style2}>
          <Typography variant="h4" component="h2" color={client.colorTheme.textColor1} >
            トレーニングデータ
          </Typography>
        </Box>
      </div>
      {chart && <PieChartParts startDate={startDate} endDate={endDate} />}
      {transison1 &&
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
        ))}
      {transison2 &&
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MenuSend />
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PartsSend />
        </Box>
      </Modal>

      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TrainingForm />
        </Box>
      </Modal>

      <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <During onUpdateStartDate={handleStartDate}
            onUpdateEndDate={handleEndDate}
            title={"グラフ生成"} />
        </Box>
      </Modal>

      <Box
        sx={{
          position: 'fixed',
          bottom: 70,
          right: 10,
          zIndex: 9999,
        }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            key={"period"}
            icon={<CalendarMonthIcon />}
            tooltipTitle={"period"}
            onClick={handleOpen4}
          />
          <SpeedDialAction
            key={"chart"}
            icon={<FileCopyIcon />}
            tooltipTitle={"chart"}
            onClick={handleChart}
          />
          <SpeedDialAction
            key={"transison1"}
            icon={<FileCopyIcon />}
            tooltipTitle={"transison1"}
            onClick={handleTransison1}
          />
          <SpeedDialAction
            key={"transison2"}
            icon={<FileCopyIcon />}
            tooltipTitle={"transison2"}
            onClick={handleTransison2}
          />
        </SpeedDial>
      </Box>

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
          <SpeedDialAction
            key={"parts"}
            icon={<AttributionIcon />}
            tooltipTitle={"parts"}
            onClick={handleOpen2}
          />
          <SpeedDialAction
            key={"training"}
            icon={<EditNoteIcon />}
            tooltipTitle={"training"}
            onClick={handleOpen3}
          />
        </SpeedDial>
      </Box>
    </div>
  );
};

export default Data;

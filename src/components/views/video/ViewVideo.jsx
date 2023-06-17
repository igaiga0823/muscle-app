import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Box,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Stack,
} from "@mui/material";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import GetUserInfo from "components/function/common/GetUserInfo";

const ViewVideo = (props) => {
  const navigate = useNavigate();

  const [videoUrl, setVideoUrl] = useState("");
  const url =
    "http://main.itigo.jp/main.itigo.jp/muscle_api/video/" + props.data[1];
  const comment = props.data[3];
  const date = props.data[5];
  const userId = props.data[2];

  const [userInfo, setUserInfo] = useState({});

  const borderColor = "34324";

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const info = await GetUserInfo(userId);
        setUserInfo(info);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
    setVideoUrl(url);
  }, []); // 空の依存配列を指定して初回のみ実行するようにする

  const cardStyle = {
    width: "100%",
    maxWidth: "600px",
    margin: "15px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px",
    border: "2px solid {borderColor}",
  };

  const mediaStyle = {
    position: "relative",
    paddingTop: "56.25%", // 16:9のアスペクト比
    height: 0,
    overflow: "hidden",
  };

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Card style={cardStyle}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
              src={userInfo.photoUrl}
            >
              {userInfo.userName}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            userInfo.userNickName != ""
              ? userInfo.userNickName
              : userInfo.userName
          }
          subheader={date}
        />
        <CardMedia style={mediaStyle}>
          <video src={videoUrl} controls style={videoStyle} />
        </CardMedia>

        <Stack direction="row" alignItems={"center"} width={"100"}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Box width={"60%"} justifyContent="left" alignItems="left">
            {comment}
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default ViewVideo;

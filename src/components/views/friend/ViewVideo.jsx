import React, { useState, useEffect } from "react";
import { Card, CardMedia } from '@mui/material';

const ViewVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState('');
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/video/707234299.242032.mp4";

  const borderColor = "34324";
  useEffect(() => {
    setVideoUrl(url);
  }, []);

  const cardStyle = {
    maxWidth: 600,
    margin: "15px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "20px", 
    border: "2px solid {borderColor}"
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

    <Card style={cardStyle} >
      <div style={mediaStyle}>
        <video src={videoUrl} controls style={videoStyle} />
      </div>
    </Card>
  );
}

export default ViewVideo;

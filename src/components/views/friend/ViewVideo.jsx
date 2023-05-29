import React, { useState, useEffect } from "react";
import { Card, CardMedia, Box, CardHeader, Avatar, IconButton, CardContent, Typography, CardActions } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ViewVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState('');
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/video/707234299.242032.mp4";

  const borderColor = "34324";
  useEffect(() => {
    setVideoUrl(url);
  }, []);

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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
      <Card style={cardStyle} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia style={mediaStyle}>
          <video src={videoUrl} controls style={videoStyle} />
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            動画っす
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>

        </CardActions>

      </Card>

    </Box>

  );
}

export default ViewVideo;

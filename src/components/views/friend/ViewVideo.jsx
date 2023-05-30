import React, { useState, useEffect } from "react";
import { Card, CardMedia } from '@mui/material';

const ViewVideo = (props) => {
  const [videoUrl, setVideoUrl] = useState('');
  const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/video/707134651.693757.mp4";

  useEffect(() => {
    setVideoUrl(url);
  }, []);

  return (
    <Card>
      <CardMedia
        component="video"
        src={videoUrl}
        controls
      />
    </Card>
  );
}

export default ViewVideo;

import React, { useState } from "react";
import { Box, Stack, Alert, Button, Input } from "@mui/material";

const UploadVideo = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userId, setuserId] = useState("1");

  const onUploadedVideo = props.onUploadedVideo;

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  function handleSend() {
    setShowNotification(true);
    console.log(2);
    setTimeout(() => {
      setShowNotification(false);

      onUploadedVideo();
    }, 2000);
  }

  const handleUpload = () => {
    if (selectedFile == null) {
      //不適当な処理です
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 2000);
      return;
    }
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("user_id", userId);

    fetch("https://iganami1106.com/muscle_api/index.cgi/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Process the response as needed
      })
      .catch((error) => {
        console.error(error);
      });

    setSelectedFile(null);
    handleSend();
  };

  return (
    <div>
      <Stack spacing={1}>
        {showNotification ? (
          <Alert severity="success" sx={{ m: 1 }}>
            送信しました
          </Alert>
        ) : (
          <Box component="span" sx={{ m: 1 }}>
            ボタン
          </Box>
        )}
        {showError && (
          <Alert severity="error" sx={{ m: 1 }}>
            ファイルが選択されていません
          </Alert>
        )}

        <Input
          type="file"
          accept="video/mp4, video/quicktime"
          onChange={handleFileSelect}
        />

        <Button variant="contained" onClick={handleUpload}>
          アップロード
        </Button>
      </Stack>
    </div>
  );
};

export default UploadVideo;

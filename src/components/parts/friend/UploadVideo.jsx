import React, { useState } from "react";
import { Box, Stack, Alert, Button, Input } from "@mui/material";

const UploadVideo = (props) => {
  const [userId, setuserId] = useState("1");
  const [selectedFile, setSelectedFile] = useState(null);
  const [comment, setComment] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [showError, setShowError] = useState(false);

  const onUploadedVideo = props.onUploadedVideo;

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSend = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      onUploadedVideo();
    }, 3000);
  };

  const handleUpload = () => {
    if (selectedFile == null) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    const allowedExtensions = ["mp4", "mov"];
    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("user_id", userId);
    formData.append("comment", comment);

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
    setComment("");
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
            適切なファイルが選択されていません
          </Alert>
        )}

        <Input
          type="file"
          accept="video/mp4, video/quicktime"
          onChange={handleFileSelect}
        />

        <Input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="コメントを入力してください"
        />

        <Button variant="contained" onClick={handleUpload}>
          アップロード
        </Button>
      </Stack>
    </div>
  );
};

export default UploadVideo;

import React, { useState } from 'react';
import UploadVideo from 'components/parts/friend/UploadVideo';

import { useMediaQuery, Box, Button, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

import "css/Friend.css";

const Modal = (props) => {
  const close = () => {
    props.handleModal();
  };
  return (
    <Box id="overlay">
      <Box id="content">
        <h3>タイムラプスの投稿</h3>

        <UploadVideo onUploadedVideo={props.onUploadedVideo} />



        {/* ×マークのアイコンボタン */}
        <Box marginTop={5}>
          <IconButton onClick={() => close()}>
            <CloseIcon />
          </IconButton>
        </Box>


      </Box>
    </Box >
  );
};

const ViewUploadVideo = () => {
  const [isShowUploadVideo, setIsShowUploadVideo] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const onClickUploadVideo = () => {
    console.log(isShowUploadVideo);
    setIsShowUploadVideo((isShowUploadVideo + 1) % 2);
  };

  const handleModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <br />
      <Box width={isSmallScreen ? '80%' : '50%'}>
        <Button variant="outlined" onClick={handleModal}>
          動画を追加
        </Button>
        {modalShow ? <Modal onUploadedVideo={onClickUploadVideo} handleModal={handleModal} /> : <br />}
      </Box>
    </Box>
  );
};

export default ViewUploadVideo;

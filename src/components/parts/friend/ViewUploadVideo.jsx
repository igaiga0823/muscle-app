import React, { useState } from 'react';
import UploadVideo from './UploadVideo';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';
const ViewUploadVideo = () => {
  const [isShowUploadVideo, setIsShowUploadVideo] = useState(0);

  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  const onClickUploadVideo = () => {
    console.log(isShowUploadVideo)
    setIsShowUploadVideo((isShowUploadVideo+1)%2);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <br/><Box width={isSmallScreen ? '80%' : '50%'}>
        <Button variant="outlined" onClick={onClickUploadVideo}>
          動画を追加
        </Button>
        {isShowUploadVideo ? <UploadVideo onUploadedVideo={onClickUploadVideo} /> : <br />}
      </Box>
    </div>
  );
};

export default ViewUploadVideo;
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
  Card,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

// 以下の相対パスは適宜変更して使ってください。
import { ClientContext, UserContext } from "App.js";

const Carousel = (props) => {
  const context = useContext(UserContext);
  const client = useContext(ClientContext)
  const navigate = useNavigate();

  // context.user_idでuserのIDが取れるよ

  // navigate("移動したいパス")

  const [autoScrollInterval, setAutoScrollInterval] = useState(4000);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = props.items.length;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => {
      clearInterval(timer);
    };
  }, [autoScrollInterval]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return (

    <Stack spacing={0}>

      <Box>
        {/* <IconButton onClick={handlePrev}>{"<"}</IconButton> */}

        <Box
          minWidth="300px"
          maxWidth="500px"
          overflow="hidden"
          bgcolor={client.colorTheme.frameBgColor}
          borderRadius={"10px"}

          color={"white"}>

          <Box margin={1}>トレーニングセール特集</Box >
          {props.items.map((item, index) => (
            <Box
              key={index}
              flexShrink={0}

              display={index === currentIndex ? "block" : "none"}
            >
              <div dangerouslySetInnerHTML={{ __html: item }} />
            </Box>
          ))}
        </Box>

        {/* <IconButton onClick={handleNext}>{">"}</IconButton> */}
      </Box>


    </Stack>
  );
};

export default Carousel;

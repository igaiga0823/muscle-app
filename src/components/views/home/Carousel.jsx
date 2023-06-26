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
import { UserContext } from "App.js";

const Carousel = (props) => {
  const context = useContext(UserContext);
  const navigate = useNavigate();

  // context.user_idでuserのIDが取れるよ

  // navigate("移動したいパス")

  const [autoScrollInterval, setAutoScrollInterval] = useState(3000);
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
    <Box display="flex" alignItems="center">
      <IconButton onClick={handlePrev}>{"<"}</IconButton>

      <Box display="flex" overflow="hidden">
        {props.items.map((item, index) => (
          <Box
            key={index}
            flexShrink={0}
            minWidth="100%"
            display={index === currentIndex ? "block" : "none"}
          >
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </Box>
        ))}
      </Box>

      <IconButton onClick={handleNext}>{">"}</IconButton>
    </Box>
  );
};

export default Carousel;

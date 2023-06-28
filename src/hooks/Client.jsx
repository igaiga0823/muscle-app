
import { useState } from "react";

const Client = () => {
  const [colorTheme, setColorTheme] = useState({
    bgColor: "#252225",
    buttonColor: "#6400B3",
    // frameBgColor: "#4B555C",
    frameBgColor: "#363745",
    textColor1: "#FFFFFF",

  })

  const changeColorTheme = (color) => {
    setColorTheme((prevState) => {
      if (color === "light") {
        return {
          bgColor: "#252225",
          buttonColor: "#6400B3",
          flameBgColor: "#646C6C",
          textColor1: "#FFFFFF",
        }
      }

      else if (color === "dark") {
        return {
          bgColor: "#252225",
          buttonColor: "#6400B3",
          flameBgColor: "#646C6C",
          textColor1: "#FFFFFF",
        }
      }

    })
  }

  return {
    colorTheme,
    changeColorTheme,
  };
};

export default Client;

import React from "react";
import { Box, Stack, Alert, Button, Input } from "@mui/material";
import headerImage from "assets/banner/S__50692109.jpg";
import SportsAnimation from "components/views/animations/SportsAnimation";


const Header = () => {

    return (
        <header style={styles.header} >
            <Stack direction="row" alignItems="center" justify="center">
                <img src={headerImage} alt="Header Image" style={styles.image} />
                <Box width={"50px"} marginLeft={2} marginTop={1}>
                    <SportsAnimation />
                </Box>
            </Stack>
        </header >
    );
};

const styles = {
    header: {
        width: "100%",
        background: "linear-gradient(180deg, #1F313F 0%, #111827 100%)",
        padding: "5px",
        textAlign: "center",
    },
    image: {
        width: "60%", // 画像の幅を適宜調整してください
        height: "auto", // 必要に応じて高さを指定するか、autoにしてアスペクト比を維持することもできます
    },
};

export default Header;

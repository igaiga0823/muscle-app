import React, { useContext } from "react";
import { ListItem, ListItemText, Typography, Box } from "@mui/material";
import { UserContext, ClientContext } from "App.js";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';


const NotificationListItem = ({
    link = "#",
    label = "最新",
    updateTime = "2023-01-01",
    content = "サンプルデータ",
}) => {
    const context = useContext(UserContext);
    const client = useContext(ClientContext);
    const navigate = useNavigate();

    const handleItemClick = (path = "") => {
        // クリック時の処理を実装してください
        navigate(path)
        // navigate("移動したいパス")などの適切なコードを追加してください
    };

    return (
        <ListItem Button onClick={handleItemClick} alignItems="flex-start">


            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography marginX={1} paddingX={1} border={"1px solid"} borderColor={"white"} variant="subtitle1" component="span" style={{ color: client.colorTheme.textColor1 }}>
                    {label}
                </Typography>
                <Typography variant="caption" component="span" style={{ color: client.colorTheme.textColor1 }}>
                    {updateTime}
                </Typography>
                <Typography variant="body2" component="p" style={{ color: client.colorTheme.textColor1, marginLeft: "8px" }}>
                    {content}
                </Typography>

            </Box>
        </ListItem>
    );
};

export default NotificationListItem;

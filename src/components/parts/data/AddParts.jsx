import { useState, useEffect, useContext } from "react";
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";
import { UserContext } from 'App.js';
import GetParts from "components/function/common/GetParts";

import "css/reset.css";

const PartsSend = () => {
    var data = {};
    const context = useContext(UserContext)
    const [value, setValue] = useState("");
    const [showNotification, setShowNotification] = useState(false);
    const [showError, setShowError] = useState(false);
    const [already, setAlready] = useState(false);

    const handleInputChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    };

    const handleSend = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    };

    const sendData = () => {
        if (value == "") {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 2000);
            return;
        }
        data["user_id"] = context.user_id;
        data["events"] = value
        fetch("https://iganami1106.com/muscle_api/index.cgi/partsadd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data1) => {
                console.log(data1);
                if (data1.Success === "already") {
                    setAlready(true);
                    setTimeout(() => {
                        setAlready(false);
                    }, 2000);
                }
                else {
                    handleSend();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#696969",
            }}>
            {showNotification ? (
                <Alert severity="success" sx={{ m: 1, color: "#696969", justifyContent: "center", display: "flex", }}>
                    部位を登録しました
                </Alert>
            ) : (
                <Box component="span" sx={{ m: 1, color: "#696969", justifyContent: "center", display: "flex", }}>
                    部位を登録してください
                </Box>
            )}
            {showError && (
                <Alert severity="error" sx={{ m: 1, color: "#696969", justifyContent: "center", display: "flex", }}>
                    部位が入っていません
                </Alert>
            )}
            {already && (
                <Alert severity="error" sx={{ m: 1, color: "#696969", justifyContent: "center", display: "flex", }}>
                    同じ部位のメニューがすでに登録されています
                </Alert>
            )}
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="部位名"
                    variant="outlined"
                    value={value}
                    onChange={handleInputChange}
                />
            </Box>
            <Button onClick={() => sendData()} variant="contained">
                登録
            </Button>
        </div>
    );
};

export default PartsSend;

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from 'App.js';
import During from 'components/parts/data/During';
import { Box, TextField, Autocomplete, Button, Alert } from "@mui/material";

import 'css/Training.css'

const Training = () => {
        const [startDate, setStartDate] = useState("1890-01-01");
        const [endDate, setEndDate] = useState("2130-01-01");
        const [muscleParts, setMuscleParts] = useState([]);
        const [musclePartsId, setMusclePartsId] = useState([]);
        const [flag, setFlag] = useState(false)
        const context = useContext(UserContext);

        const fetchParts = async () => {
                try {
                        console.log(context.user_id);

                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                if (context.user_id !== "") {
                        setFlag(true)
                }
        }, [context.user_id])

        useEffect(() => {
                fetchParts();
        }, [flag]);

        const handleStartDate = (value) => {
                setStartDate(value);
        };

        const handleEndDate = (value) => {
                setEndDate(value);
        };

        return (
                <div>
                        <h2>{muscleParts[0]}</h2>
                        <During onUpdateStartDate={handleStartDate} onUpdateEndDate={handleEndDate} title={"範囲設定"} />
                        {flag && <></>}
                        {musclePartsId !== 0 && musclePartsId.map((item, index) => (
                                <div>

                                </div>
                        ))}
                </div>
        );
};


export default Training;
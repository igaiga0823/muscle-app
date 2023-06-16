import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from 'App.js';
import During from 'components/parts/data/During';
import PieChartParts from 'components/views/graphs/pieChartParts';
import TransitionChart from 'components/views/graphs/TransisionChart';
import GetParts from "components/function/common/GetParts";

const Data = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [muscleParts, setMuscleParts] = useState([]);
    const [musclePartsId, setMusclePartsId] = useState([]);
    const context = useContext(UserContext);

    const fetchParts = async () => {
        try {
            console.log(context.user_id);
            const info = await GetParts(Number(context.user_id));
            console.log(info["musclePart"]);
            setMuscleParts(info["musclePart"]);
            setMusclePartsId(info["musclePartId"]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchParts();
    }, [context.user_id]);

    const handleStartDate = (value) => {
        setStartDate(value);
    };

    const handleEndDate = (value) => {
        setEndDate(value);
    };

    return (
        <div>
            <h2>{muscleParts[0]}</h2>
            <During onUpdateStartDate={handleStartDate} onUpdateEndDate={handleEndDate} />
            <PieChartParts startDate={startDate} endDate={endDate} />
            {musclePartsId !== 0 && musclePartsId.map((item, index) => (
                <div>
                    <h2>{muscleParts[index]}</h2>
                    <TransitionChart startDate={startDate} endDate={endDate} musclePart={item} key={index} />
                </div>
            ))}
        </div>
    );
};

export default Data;

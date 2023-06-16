import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from 'App.js';
import During from 'components/parts/data/During';
import PieChartParts from 'components/views/graphs/pieChartParts';
import TransitionChart from 'components/views/graphs/TransisionChart';
import GetParts from "components/function/common/GetParts";
import GetMenu from "components/function/common/GetMenu"

const Data = () => {
    const [startDate, setStartDate] = useState("1890-01-01");
    const [endDate, setEndDate] = useState("2130-01-01");
    const [muscleParts, setMuscleParts] = useState([]);
    const [musclePartsId, setMusclePartsId] = useState([]);
    const [flag, setFlag] = useState(false)
    const context = useContext(UserContext);

    const fetchParts = async () => {
        try {
            console.log(context.user_id);
            const info = await GetParts(Number(context.user_id));
            console.log(info["musclePart"]);
            if (info !== undefined) {
                setMuscleParts(info["musclePart"]);
                setMusclePartsId(info["musclePartId"]);
            }
            const info2 = await GetMenu(Number(context.user_id))

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
            <During onUpdateStartDate={handleStartDate} onUpdateEndDate={handleEndDate} title={"グラフ生成"} />
            {flag && <PieChartParts startDate={startDate} endDate={endDate} />}
            {musclePartsId && Array.isArray(musclePartsId) && musclePartsId.length > 0 && musclePartsId.map((item, index) => (
                <div>
                    <TransitionChart startDate={startDate} endDate={endDate} musclePartId={item} key={index} />
                </div>
            ))}
        </div>
    );
};

export default Data;

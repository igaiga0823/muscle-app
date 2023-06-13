import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import During from 'components/parts/data/During';
import PieChartParts from 'components/views/graphs/pieChartParts';

const Data = () => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    console.log(endDate)

    const handleStartDate = (value) => {
        setStartDate(value);
    }

    const handleEndDate = (value) => {
        setEndDate(value);
    }

    return (
        <div>
            <During onUpdateStartDate={handleStartDate} onUpdateEndDate={handleEndDate} />
            <PieChartParts startDate={startDate} endDate={endDate} />
        </div>

    )
};

export default Data;
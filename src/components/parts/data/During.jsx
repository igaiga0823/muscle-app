import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { UserContext } from 'App.js';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

const During = (props) => {
    const [selectedDate1, setSelectedDate1] = useState(null);
    const [selectedDate2, setSelectedDate2] = useState(null);

    const handleDateChange1 = (date) => {
        setSelectedDate1(date);
    };

    const handleDateChange2 = (date) => {
        setSelectedDate2(date);
    };

    const sendData = async () => {
        console.log(selectedDate1);
        const start_year = dayjs(selectedDate1).year();
        const start_month = String(dayjs(selectedDate1).month() + 1).padStart(2, '0');
        const start_day = String(dayjs(selectedDate1).date()).padStart(2, '0');
        const end_year = dayjs(selectedDate2).year();
        const end_month = String(dayjs(selectedDate2).month() + 1).padStart(2, '0');
        const end_day = String(dayjs(selectedDate2).date()).padStart(2, '0');

        const start_date = start_year + "-" + start_month + "-" + start_day;
        const end_date = end_year + "-" + end_month + "-" + end_day;
        props.onUpdateStartDate(start_date);
        props.onUpdateEndDate(end_date)
    };

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedDate1} onChange={handleDateChange1} />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={selectedDate2} onChange={handleDateChange2} />
            </LocalizationProvider>
            <Button onClick={sendData} variant="contained">
                グラフ生成
            </Button>
        </div>
    );
};

export default During;

import * as React from "react";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

const PieChartParts = () => {

  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const fetchData = async (start_year, start_month, start_day, end_year, end_month, end_day) => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/piechart";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 1,
        start_year: start_year,
        start_month: start_month,
        start_day: start_day,
        end_year: end_year,
        end_month: end_month,
        end_day: end_day,
      }),
    };
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const sendData = () => {
    console.log(selectedDate1)
    const start_year = dayjs(selectedDate1).year();
    const start_month = dayjs(selectedDate1).month() + 1; // 月は0から始まるため、+1する
    const start_day = dayjs(selectedDate1).date();
    const end_year = dayjs(selectedDate2).year();
    const end_month = dayjs(selectedDate2).month() + 1; // 月は0から始まるため、+1する
    const end_day = dayjs(selectedDate2).date();

    console.log("年:", start_year);
    console.log("月:", start_month);
    console.log("日:", start_day);
    fetchData(start_year, start_month, start_day, end_year, end_month, end_day)
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

export default PieChartParts;

import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "App.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Button, Box, Stack } from "@mui/material";
import dayjs from "dayjs";
import DateTimeToDate from "components/function/common/DateTimeToDate";
import GetUserInfo from "components/function/common/GetUserInfo";

const During = (props) => {
  // 初期値で
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const context = useContext(UserContext);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  useEffect(() => {
    const currentDate = new Date();

    const formattedDate = currentDate.toISOString().split("T")[0];
    props.onUpdateEndDate(formattedDate);
  }, []);

  const sendData = async () => {
    console.log(selectedDate1);
    const start_year = dayjs(selectedDate1).year();
    const start_month = String(dayjs(selectedDate1).month() + 1).padStart(
      2,
      "0"
    );
    const start_day = String(dayjs(selectedDate1).date()).padStart(2, "0");
    const end_year = dayjs(selectedDate2).year();
    const end_month = String(dayjs(selectedDate2).month() + 1).padStart(2, "0");
    const end_day = String(dayjs(selectedDate2).date()).padStart(2, "0");

    const start_date = start_year + "-" + start_month + "-" + start_day;
    const end_date = end_year + "-" + end_month + "-" + end_day;

    if (start_date === "NaN-NaN-NaN") {
      console.log(start_date);
      const signUpDate = GetUserInfo(context.user_id).date;
      const get_date = DateTimeToDate(signUpDate);
      console.log(get_date);
      props.onUpdateStartDate(get_date);
    } else {
      props.onUpdateStartDate(start_date);
    }
    if (end_date === "NaN-NaN-NaN") {
      const currentDate = new Date();

      const formattedDate = currentDate.toISOString().split("T")[0];
      props.onUpdateEndDate(formattedDate);
    } else {
      props.onUpdateEndDate(end_date);
    }
  };

  return (
    <Box width={250} marginX="auto">
      <Stack direction="column" alignItems="center" spacing={2}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          textAlign="center"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={selectedDate1} onChange={handleDateChange1} />
          </LocalizationProvider>
          <span style={{ display: "flex", alignItems: "center" }}>～</span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={selectedDate2} onChange={handleDateChange2} />
          </LocalizationProvider>
        </Stack>
        <Button onClick={sendData} variant="contained">
          {props.title}
        </Button>
      </Stack>
    </Box>
  );
};

export default During;

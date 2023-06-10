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

const PieChartParts = () => {
  var ans = {};
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const context = useContext(UserContext)
  const [datas, setDatas] = useState({})
  const [data, setData] = useState({})
  const [options, setOptions] = useState({})
  const [chartContainerStyle, setChartContainerStyle] = useState({})

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleSend = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const fetchData = async (start_date, end_date) => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/piechart";
    ans["user_id"] = context.user_id
    ans["start_date"] = start_date
    ans["end_date"] = end_date
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ans
      }),
    };
    try {
      const response = await fetch(url, requestOptions);
      const d = await response.json();
      setDatas(d)
      handleSend()
    } catch (error) {
      console.log(error);
    }
  };

  const pieChartCraft = (datas) => {
    setData({
      labels: datas["parts"],
      datasets: [
        {
          data: datas["time"],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#33FF9E",
            "#FF9F40",
            "#FF66C3",
            "#00CC99",
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#33FF9E",
            "#FF9F40",
            "#FF66C3",
            "#00CC99",
          ],
        },
      ],
    })

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 10,
            font: {
              size: 12,
            },
          },
        },
        datalabels: {
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
          formatter: (value) => value,
        },
      },
    });

    setChartContainerStyle({
      background: "#f5f5f5",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    });
  }

  const sendData = () => {
    console.log(selectedDate1)
    const start_year = dayjs(selectedDate1).year();
    const start_month = dayjs(selectedDate1).month() + 1; // 月は0から始まるため、+1する
    const start_day = dayjs(selectedDate1).date();
    const end_year = dayjs(selectedDate2).year();
    const end_month = dayjs(selectedDate2).month() + 1; // 月は0から始まるため、+1する
    const end_day = dayjs(selectedDate2).date();

    const start_date = start_year + "-" + start_month + "-" + start_day
    const end_date = end_year + "-" + end_month + "-" + end_day
    fetchData(start_date, end_date)
    pieChartCraft(datas)
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

      {showNotification && (
        <div className="chart-wrapper">
          <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
        </div>
      )}
      <style jsx>{`
        .chart-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .chart-title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 10px;
          color: #333;
        }
        .chart-wrapper {
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default PieChartParts;

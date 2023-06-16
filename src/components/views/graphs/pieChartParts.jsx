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

const PieChartParts = (props) => {
  var ans = {}
  const [showNotification, setShowNotification] = useState(false);
  const context = useContext(UserContext)
  const [datas, setDatas] = useState({})
  const [data, setData] = useState({})
  const [options, setOptions] = useState({})
  const [chartContainerStyle, setChartContainerStyle] = useState({})

  const handleSend = () => {
    setShowNotification(true);
  };

  const fetchData = () => {
    const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/piechart/parts";

    ans["user_id"] = context.user_id;
    ans["start_date"] = props.startDate;
    ans["end_date"] = props.endDate;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ans),
    };

    console.log(ans);
    fetch(url, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then(d => {
        setDatas(d);
        console.log("hello")
        console.log(d);
      })
      .catch(error => {
        console.log(error);
      });
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

  useEffect(() => {
    if (props.startDate !== "") {
      fetchData();
    }
    console.log(props.startDate)
  }, [props.startDate]);

  useEffect(() => {
    pieChartCraft(datas);
    handleSend()
  }, [datas]);

  return (
    <div>
      {showNotification && (
        <div>
          <h2>部位の割合</h2>
          <div className="chart-wrapper">
            <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
          </div>
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

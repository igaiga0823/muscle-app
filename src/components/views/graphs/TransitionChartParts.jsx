import React from "react";
import { Line } from "react-chartjs-2";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "App.js";

const TransitionChartParts = (props) => {
  var ans = {};
  const [showNotification, setShowNotification] = useState(false);
  const context = useContext(UserContext);
  const [datas, setDatas] = useState({});
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});

  const handleSend = () => {
    setShowNotification(true);
  };

  const fetchData = () => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/transison/parts";

    ans["user_id"] = context.user_id;
    ans["start_date"] = props.startDate;
    ans["end_date"] = props.endDate;
    ans["menu_id"] = props.menuId;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ans),
    };
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then((d) => {
        setDatas(d);
        console.log(d);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChartCraft = () => {
    setData({
      labels: datas["dates"],
      datasets: [
        {
          label: "時間(分)",
          data: datas["time"],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
          spanGaps: true,
        },
      ],
    });

    setOptions({
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
            parser: "YYYY-MM-DD",
            tooltipFormat: "ll",
          },
          title: {
            display: true,
            text: "Date",
          },
        },
        y: {
          title: {
            display: true,
            text: "時間 (分)",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            boxWidth: 10,
            font: {
              size: 12,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: "white",
    });
  };

  useEffect(() => {
    console.log(props);
    if (props.startDate !== "") {
      fetchData();
    }
  }, [props.startDate]);

  useEffect(() => {
    ChartCraft(datas);
    handleSend();
  }, [datas]);

  return (
    <div>
      {showNotification && (
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Line data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default TransitionChartParts;

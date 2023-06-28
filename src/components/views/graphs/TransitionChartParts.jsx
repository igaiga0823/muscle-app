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
    if (datas["menu_length"] !== 0) {
      setShowNotification(true);
    }
    else {
      console.log("hello")
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fetchData = () => {
    const url =
      "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/transison/parts1/menu";
    ans["user_id"] = context.user_id;
    ans["start_date"] = props.startDate;
    ans["end_date"] = props.endDate;
    ans["muscle_part_id"] = props.musclePartId;
    console.log(ans);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ans),
    };
    console.log(ans);
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
    const datasets = [];

    for (let i = 1; i <= datas["menu_length"]; i++) {
      const key = `time${i}`;
      console.log(datas["menu"]);
      console.log(datas["time"]);

      const value_time = []

      for (let j = 0; j < datas["time_length"]; j++) {
        value_time.push(datas["time"][j][i - 1])
      }


      if (datas["menu"] && datas["menu"].length > i - 1) {
        datasets.push({
          label: datas["menu"][i - 1],
          data: value_time,
          fill: false,
          borderColor: getRandomColor(),
          tension: 0.1,
          spanGaps: true,
        });
      }
    }

    setData({
      labels: datas["dates"],
      datasets: datasets,
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
            text: props.musclePart,
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

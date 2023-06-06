import { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/graph/piechart";
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1,
        }),
      };
      try {
        const response = await fetch(url, requestOptions);
        // const data = await response.json();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const data = {
    labels: ["Red", "Blue", "Yello"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
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
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">Doughnut Chart</h2>
      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;

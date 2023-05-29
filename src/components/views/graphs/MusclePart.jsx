import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DoughnutChart = () => {
    const [x, setX] = useState({});

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
                const data = await response.json();
                setX(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const data = {
        labels: x["menu"],
        datasets: [
            {
                data: x["count"],
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
            datalabels: {
                color: "#fff",
                font: {
                    size: 14,
                    weight: "bold",
                },
                formatter: (value) => value,
            },
        },
    };


    const chartContainerStyle = {
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    };


    return (
        <div className="chart-container" style={chartContainerStyle}>
            <h2 className="chart-title" >Doughnut Chart</h2>
            <div className="chart-wrapper">
                <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
            </div>
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

export default DoughnutChart;

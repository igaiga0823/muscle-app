import React from "react";
import { Line } from "react-chartjs-2";

const TransitionChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default TransitionChart;

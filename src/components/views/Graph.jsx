import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    const lineConfig = {
        type: "pie",
        data: {
            labels: ["docomo", "au", "softbank", "other"],
            datasets: [{
                data: [39.9, 27.4, 22.3, 10.4],
                backgroundColor: [
                    "rgba(255, 99, 132,0.5)",
                    "rgba(255, 159, 64,0.5)",
                    "rgba(240, 240, 240,0.5)",
                    "rgba(54, 162, 235,0.5)"
                ]
            }],
        },
        options: {
            responsive: false
        } 
    };

    const chart = new Chart(chartCanvas, lineConfig);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="lineChart" ref={chartRef}></canvas>
    </div>
  );
};

export default Graph;

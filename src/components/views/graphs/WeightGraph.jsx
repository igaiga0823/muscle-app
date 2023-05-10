import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const WeightGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    // サンプルデータ
    const sampleData = [
      { date: '2023-05-01', weight: 70 },
      { date: '2023-05-02', weight: 69.5 },
      { date: '2023-05-03', weight: 69 },
      { date: '2023-05-04', weight: 68.5 },
      { date: '2023-05-05', weight: 68 },
      { date: '2023-05-06', weight: 67.5 },
      { date: '2023-05-07', weight: 67 },
    ];

    const labels = sampleData.map((data) => data.date);
    const weights = sampleData.map((data) => data.weight);

    const data = {
      labels: labels,
      datasets: [
        {
          label: '体重 (kg)',
          data: weights,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            min: 0,
          },
        },
      },
    };

    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, config);
      return () => chartInstance.destroy(); // Clean up on component unmount
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="300" height="150" />
    </div>
  );
};

export default WeightGraph;

import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
const LineChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const labels = Array.from({ length: 7 }, (_, i) => new Date().toLocaleDateString('en', { month: 'short', year: 'numeric', month: 'long', day: 'numeric' }));
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
    };

    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, config);
      return () => chartInstance.destroy(); // Clean up on component unmount
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;

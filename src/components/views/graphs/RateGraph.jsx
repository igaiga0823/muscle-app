import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import RATEGRAPH from './GraphUI.jsx';

const RateGraph = () => {
  const chartRef = useRef(null);

  function objectToArray(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    return [keys, values];
  }

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');
    const data = {腕: 25, 肩: 30, 背中: 21, 胸: 12, 脚: 10};
    const [keys, values] = objectToArray(data);
    const Config = {
        type: "pie",
        data: {
            labels: keys,
            datasets: [{
                data: values,
                backgroundColor: RATEGRAPH.backgroundColor
            }],
        },
        options: {
            responsive: false,
        } 
    };

    const chart = new Chart(chartCanvas, Config);

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

export default RateGraph;

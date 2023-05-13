import React, { useState, useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';

const WeightGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/weightgraph/post";
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "user_id": 1,
        }),
      };


      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data);

        // Chart.js グラフの作成
        const labels = data.map((item) => item.date);
        const weights = data.map((item) => item.weight);

        const chartData = {
          labels: labels,
          datasets: [
            {
              label: '体重 (kg)',
              data: weights,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              spanGaps: true,
            },
          ],
        };

        const chartConfig = {
          type: 'line',
          data: chartData,
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day',
                  parser: 'YYYY-MM-DD',
                  tooltipFormat: 'll'
                },
                title: {
                  display: true,
                  text: 'Date'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Weight (kg)'
                }
              }
            },
          },
        };

        if (chartRef && chartRef.current) {
          const chartInstance = new Chart(chartRef.current, chartConfig);
          return () => chartInstance.destroy(); // コンポーネントのアンマウント時にクリーンアップ
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <canvas id="lineChart" ref={chartRef}></canvas>
    </div>
  );
};

export default WeightGraph;

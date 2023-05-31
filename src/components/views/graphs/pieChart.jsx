import { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  // const chartRef = useRef();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = "http://main.itigo.jp/main.itigo.jp/muscle_api/index.cgi/weightgraph";
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         "user_id": 1,
  //         "data_range": 19,
  //       }),
  //     };
  //     try {
  //       const response = await fetch(url, requestOptions);
  //       const data = await response.json();
  //       console.log(data);

  //       // Chart.js グラフの作成
  //       const labels = data.date;
  //       const weights = data.weight;

  //       const chartData = {
  //         labels: labels,
  //         datasets: [
  //           {
  //             label: '体重 (kg)',
  //             data: weights,
  //             fill: false,
  //             borderColor: 'rgb(75, 192, 192)',
  //             tension: 0.1,
  //             spanGaps: true,
  //           },
  //         ],
  //       };

  //       const chartConfig = {
  //         type: 'line',
  //         data: chartData,
  //         options: {
  //           scales: {
  //             x: {
  //               type: 'time',
  //               time: {
  //                 unit: 'day',
  //                 parser: 'YYYY-MM-DD',
  //                 tooltipFormat: 'll'
  //               },
  //               title: {
  //                 display: true,
  //                 text: 'Date'
  //               }
  //             },
  //             y: {
  //               title: {
  //                 display: true,
  //                 text: 'Weight (kg)'
  //               }
  //             }
  //           },
  //         },
  //       };

  //       if (chartRef && chartRef.current) {
  //         const chartInstance = new Chart(chartRef.current, chartConfig);
  //         return () => chartInstance.destroy(); // コンポーネントのアンマウント時にクリーンアップ
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
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

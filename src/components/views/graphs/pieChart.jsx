import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
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

  useEffect(() => {
    // グラフ描画後の処理などをここに記述
  }, []);

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

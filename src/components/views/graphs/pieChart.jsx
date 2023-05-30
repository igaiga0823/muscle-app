import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  // useEffect(() => {
  //   // 動画のURLを取得する非同期関数
  //   const fetchVideoUrl = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (response.ok) {
  //         const videoData = await response.json();
  //         setVideoUrl(videoData.url);
  //       } else {
  //         console.log('Failed to fetch video URL');
  //       }
  //     } catch (error) {
  //       console.log('Error fetching video URL:', error);
  //     }
  //   };

  //   fetchVideoUrl();
  // }, []);
  // グラフに表示するデータ
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

  // グラフのオプション設定
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <h2>Doughnut Chart</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

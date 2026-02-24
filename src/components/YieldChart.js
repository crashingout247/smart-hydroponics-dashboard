import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const YieldChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Mock data
    datasets: [{
      label: 'Yield (kg)',
      data: [50, 100, 150, 300], // From proposal estimates
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    }],
  };

  return <Line data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Yield Over Time' } } }} />;
};

export default YieldChart;
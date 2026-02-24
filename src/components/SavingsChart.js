import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SavingsChart = () => {
  const data = {
    labels: ['Water', 'Electricity', 'CO2'], // Key metrics from proposal
    datasets: [{
      label: 'Savings (%)',
      data: [80, 25, 30], // Mock from proposal (70-90% water, 20-30% elec, 20-40% CO2)
      backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(75,192,192,0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(75,192,192,1)'],
      borderWidth: 1,
    }],
  };

  return <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Resource Savings' } } }} />;
};

export default SavingsChart;
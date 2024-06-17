import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  labels: string[];
  data: number[];
  title: string;
  backgroundColor?: string;
}

const LineChart: React.FC<LineChartProps> = ({
  labels,
  data,
  title,
  backgroundColor = 'rgba(99, 199, 255, 0.6)'
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let lineChart: Chart | undefined;

  useEffect(() => {
    if (chartRef.current) {
      lineChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              data: data,
              fill: true,
              tension: 0.4,
              backgroundColor: backgroundColor,
              borderColor: 'rgba(99, 199, 255, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1
              }
            }
          }
        }
      });
    }

    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
    };
  }, [labels, data, title, backgroundColor]);

  return <canvas ref={chartRef} />;
};

export default LineChart;

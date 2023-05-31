import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function LineChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    // Retrieve the chart canvas element
    const chartCanvas = chartRef.current;

    // Create the chart instance
    const myChart = new Chart(chartCanvas, data);

    // Cleanup the chart on component unmount
    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
}

export default LineChart;

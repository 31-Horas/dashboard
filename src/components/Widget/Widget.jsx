import {React, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Line } from "react-chartjs-2";
import LineChart from "../LineChart/LineChart"
import { CategoryScale } from 'chart.js';
import { Chart } from 'chart.js/auto';
import { GraphicEqSharp } from '@mui/icons-material';

Chart.register(CategoryScale);

const Widget = ({ graphData }) => {
  // console.log('options', graphData.options);

  // const data = {
  //   type: graphData.type,
  //   data: graphData.data,
  //   options: graphData.options
  // }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating the asynchronous data fetching
    setTimeout(() => {
      // Assuming you receive the data in the format { data: {...}, options: {...} }
      if (graphData && graphData.data) {
        setLoading(false); // Set loading to false when data is available
      }
    }, 2000); // Simulating a 2-second delay for fetching data
  }, [graphData]);

  if (loading) {
    // Render a loading state or placeholder while data is being fetched
    return <div>Loading...</div>;
  }

  const data = {
    type: graphData.type,
    data: graphData.data,
    options: graphData.options
  }

  console.log('made data in widget', data);

  const data2 = {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Orange', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'category' // Use 'category' scale for labels
        },
        y: {
          beginAtZero: true
        }
      }
    }
  };

  return (
    <Card sx={{ 
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
      minWidth: 450,
      minHeight: 300, 
      maxWidth: 450,
      maxHeight: 300}}>
      <Typography variant="h6" component="div" mt={2}>
        Graph
      </Typography>
      <CardContent sx={{ width: 400, height: 300}}>
        <LineChart data={data} /> 
      </CardContent>
    </Card>
  );
};

export default Widget;
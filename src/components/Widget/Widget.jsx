import {React, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BarChart from '../BarChart/BarChart';
import { Line } from "react-chartjs-2";
import LineChart from "../LineChart/LineChart"

const Widget = ({ graphData }) => {

  console.log(graphData);

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

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
    <Card sx={{ minWidth: 345, maxWidth: 400 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="https://www.shutterstock.com/image-photo/portrait-otter-uk-260nw-1980762944.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Random Graph
        </Typography>
        {/* <BarChart data={data}/> */}
        <LineChart data={data2}/>
        {/* <Typography variant="body2" color="text.secondary">
          {JSON.stringify(graphData)}
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default Widget;
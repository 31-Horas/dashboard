import {React, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const Widget = ({ graphData }) => {

  console.log(JSON.stringify(graphData.data));

  // const graphConfig = {
  //   labels: graphData.data.labels,
  //   datasets: graphData.data.datasets
  // }

  // console.log(graphConfig);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.shutterstock.com/image-photo/portrait-otter-uk-260nw-1980762944.jpg"
        title="green iguana"
      />
      <div>
        {/* <Line data={graphConfig}/> */}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Otter
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {JSON.stringify(graphData)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Widget;
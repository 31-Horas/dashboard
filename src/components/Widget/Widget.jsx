import {React, useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { VictoryBar } from 'victory';
import BarChart from '../BarChart/BarChart';

const Widget = ({ graphData }) => {

  console.log(graphData);

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
  ];

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="https://www.shutterstock.com/image-photo/portrait-otter-uk-260nw-1980762944.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Otter
        </Typography>
        <BarChart data={data}/>
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
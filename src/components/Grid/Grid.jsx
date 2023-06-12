import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Widget from '../Widget/Widget';
import axios from 'axios';

function createLayout(len){
  let layout = [];

  for(let n = 0; n < len; n++){
    let widget;
    if(n % 2 === 0){
      widget = {i: `${n}`, x: Math.floor((0 + n) / 3) , y: 0, w: 1, h: 1}
    } else {
      widget = {i: `${n}`, x:  Math.floor((0 + n) / 3), y: 1, w: 1, h: 1}
    }
    layout.push(widget);
  }

  return layout;
}


const Grid = () => {
  const [graphs, setGraphs] = useState([]);

  const [layout, setLayout] = useState([
    { i: '0', x: 0, y: 1, w: 1, h: 1 },
    { i: '1', x: 1, y: 1, w: 1, h: 1 },
    { i: '3', x: 0, y: 1, w: 1, h: 1 },
    { i: '2', x: 1, y: 1, w: 1, h: 1 },
    { i: '4', x: 0, y: 1, w: 1, h: 1 },
  ]);

  const getData = async () => {
    try {
      //CHANGE THIS CALL TO THE BACKEND CORRECT ONE
      const { data } = await axios.get('http://localhost:5000/data.json');
      // setGraphs(JSON.parse(data));
      const dataGraphs = data.graphs;
      setGraphs(dataGraphs);
      setLayout(createLayout(dataGraphs.length));
      // console.log("data", data.graphs);
      // console.log("length of graphs:", data.graphs.length);
    }
    catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  useEffect(() => {
    getData();
    // while(graphs.length <= 0){
    //   const wait = true;
    // }
    // const newLayout = createLayout(graphs.length);
    // setLayout(newLayout);
  }, [])

  console.log('graphs data: ', graphs);
  console.log('graphs lenght: ', graphs.length);
  console.log('layout', layout);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={3}
      rowHeight={310}
      width={window.innerWidth}
      onLayoutChange={onLayoutChange}
      isResizable={false}
    >
      {layout.map((curr) => {
        // const itemData = data.find(item => item.i === curr.i);
        return (
          <div key={curr.i} className='widget-style'>
            <Widget graphData={graphs[curr.i]}/>
          </div>
        )
      })}
    </GridLayout>
  );
};

export default Grid;

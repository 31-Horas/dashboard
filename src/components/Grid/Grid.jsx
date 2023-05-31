//     // const handleDelete = (key) => {
//     //     const tempArray = widgetArray.slice();
//     //     const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
//     //     tempArray.splice(index, 1);
//     //     setWidgetArray(tempArray);
//     // };

//     // const [data, setData] = useState([]);
    
//     // const getData = async () => {
//     //     const { data } = await axios.get('https://rickandmortyapi.com/api/episode/2');
//     //     setData(data);
//     // }

//     // useEffect(() => {
//     //     getData();
//     // }, []);

import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Widget from '../Widget/Widget';
import axios from 'axios';


const Grid = () => {
  const [graphs, setGraphs] = useState([]);
  
  const getData = async () => {
    const { data } = await axios.get('http://localhost:5000/data.json');
    setGraphs(data);
    // console.log("data", graphs);
  }

  const parseData = () => {
    for(let i = 0; i < graphs.length; i++) {
      console.log("parse data", JSON.stringify(graphs[i]));
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const [layout, setLayout] = useState([
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 0, y: 1, w: 1, h: 1 },
    { i: '4', x: 1, y: 1, w: 1, h: 1 },
  ]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={4}
      rowHeight={400}
      width={window.innerWidth}
      onLayoutChange={onLayoutChange}
    >
      {layout.map((curr) => {
        // const itemData = data.find(item => item.i === curr.i);
        return (
          <div key={curr.i}>
            <Widget graphData={graphs}/>
          </div>
        )
      })}
    </GridLayout>
  );
};

export default Grid;

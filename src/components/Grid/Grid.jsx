//     // const handleDelete = (key) => {
//     //     const tempArray = widgetArray.slice();
//     //     const index = tempArray.indexOf(tempArray.find((data) => data.i === key));
//     //     tempArray.splice(index, 1);
//     //     setWidgetArray(tempArray);
//     // };

  

import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Widget from '../Widget/Widget';
import axios from 'axios';


const Grid = () => {
  const [graphs, setGraphs] = useState({});
  
  const getData = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/data.json');
      // setGraphs(JSON.parse(data));
      setGraphs(data.graphs);
      console.log("data", data.graphs);
      console.log("graphs", graphs);
    }
    catch (error) {
      console.error('Error retrieving data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const [layout, setLayout] = useState([
    { i: '0', x: 0, y: 0, w: 1, h: 1 },
    { i: '1', x: 1, y: 0, w: 1, h: 1 },
    { i: '2', x: 0, y: 1, w: 1, h: 1 },
    { i: '3', x: 1, y: 1, w: 1, h: 1 },
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
            <Widget graphData={graphs[curr.i]}/>
          </div>
        )
      })}
    </GridLayout>
  );
};

export default Grid;

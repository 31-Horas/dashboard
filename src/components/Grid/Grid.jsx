// import React, { useEffect, useState } from "react";
// import { Responsive, WidthProvider } from "react-grid-layout";
// // import "react-grid-layout/css/styles.css";
// import "react-resizable/css/styles.css";
// import './ReactGridLayout.css'
// import axios from "axios";
// import Widget from "../Widget/Widget.jsx";


// // const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const ReactGridLayout = () => {

//     const layout = [
//         { i: "widget1", x: 0, y: 0, w: 1, h: 1 },
//         { i: "widget2", x: 2, y: 0, w: 1, h: 1 },
//         { i: "widget3", x: 3, y: 0, w: 1, h: 1 },
//         { i: "widget4", x: 4, y: 1, w: 1, h: 1 },
//         { i: "widget5", x: 5, y: 0, w: 1, h: 1 }
//     ];
    
//     // const [layouts, setLayouts] = useState(null);

//     // const [widgetArray, setWidgetArray] = useState([
//     //     { i: "widget1", x: 0, y: 0, w: 1, h: 1 },
//     //     { i: "widget2", x: 1, y: 0, w: 1, h: 1 },
//     //     { i: "widget3", x: 2, y: 0, w: 1, h: 1 },
//     // ]);

//     // const handleModify = (layouts, layout) => {
//     //     const tempArray = widgetArray;
//     //     setLayouts(layout);
//     //     layouts?.map((position) => {
//     //         tempArray[Number(position.i)].x = position.x;
//     //         tempArray[Number(position.i)].y = position.y;
//     //         tempArray[Number(position.i)].width = position.w;
//     //         tempArray[Number(position.i)].height = position.h;
//     //     });
//     //     setWidgetArray(tempArray);
//     // };

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

//     return (
//             // {/* <div>
//             //     {JSON.stringify(data)}
//             // </div> */}
//             // {/* <button onClick={() => handleAdd()}>Add Widget</button> */}

//         <ResponsiveReactGridLayout
//             breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//             layouts={{ lg: layout }}
//             cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
//             rowHeight={350}
//             width={1200}
//             // autoSize={true}
//             // onLayoutChange={handleModify}
//             // verticalCompact={true}
//             // preventCollision={true}
//         >
//             {/* <Widget key={"widget1"}/>
//             <Widget key={"widget3"}/> */}
//             {layout.map( (curr) => {
//                 return (
//                     <div 
//                         key={curr.i} 
//                     >
//                         <Widget/>
//                     </div>
//                 )
//             })}

//         </ResponsiveReactGridLayout>
//     );
// };

// export default ReactGridLayout;

import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Widget from '../Widget/Widget';

const Grid = () => {
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
      cols={layout.length}
      rowHeight={400}
      width={window.innerWidth}
      onLayoutChange={onLayoutChange}
    >
      {layout.map((curr) => {
        return (
          <div key={curr.i}>
            <Widget/>
          </div>
        )
      })}
      {/* <div key="1">Item 1
        <Widget/>
      </div>
      <div key="2">Item 2</div>
      <div key="3">Item 3</div>
      <div key="4">Item 4</div> */}
    </GridLayout>
  );
};

export default Grid;

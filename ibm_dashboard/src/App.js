import React from 'react';
import './dropzone-style.css';
import DropzoneComponent from './DropzoneComponent';

import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";


function App() {

  function handleDrop(file) {
    console.log('File selected:', file);
  }

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="context">
            <Topbar />
            <Box display={"flex"}>
              <Sidebar/>
              <Dashboard/>
            </Box>
          </main>
          <header className='App-header'>
            <DropzoneComponent onDrop={handleDrop} />
          </header>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App; 

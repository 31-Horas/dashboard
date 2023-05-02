import React from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Welcome from './pages/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />}>
          <Route index element={<Welcome />} />
          <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    // // <ColorModeContext.Provider value={colorMode}>
    // //   <ThemeProvider theme={theme}>
    // //     <CssBaseline />
  
    //   {/* </ThemeProvider>
    // </ColorModeContext.Provider> */}
  );
}

export default App; 

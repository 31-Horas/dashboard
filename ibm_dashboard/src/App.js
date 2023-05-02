import React from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import Welcome from './pages/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import LoginForm from './pages/Login/Login';
import Login from './pages/Login/Login';


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
          <Route index element={<Login />} />
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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import LoginForm from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import JsonPage from './pages/JsonPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Layout />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/json" component={JsonPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

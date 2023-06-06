import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import JsonPage from './pages/JsonPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import "./App.css"
import Topbar from './components/Topbar/Topbar'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
          main: '#52AD9C',
      },
      secondary: {
          main: '#9FFCDF',
      },
      warning: {
          main: '#7b2d26',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/json" component={JsonPage} />
        <Route path='/topbartest' element={<Topbar/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


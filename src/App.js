import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import LoginForm from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import JsonPage from './pages/JsonPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import "./App.css"
import axios from 'axios';
import Topbar from './components/Topbar/Topbar'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

async function isLoggedIn() {
  try {
    const response = await axios.get('http://localhost:5000/auth/signin', { withCredentials: true });
    if (response.status === 200) {
      // User is already logged in
      console.log(response.data);
      return true;
    } else if (response.status === 202) {
      // User is not logged in, redirect to the login page
      console.log(response.data);
      return false;
    }
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error checking login status:', error);
  }
}


function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    isLoggedIn().then(result => {
      setLoggedIn(result);
    });
  }, []);

  console.log(loggedIn);  

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
        <Route path="/" element={loggedIn ? <Navigate to="/welcome" />: <LoginForm />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard/>: <Navigate to="/"/>} />
        <Route path="/welcome" element={loggedIn ? <Welcome/>: <Navigate to="/"/>}/>
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/json" component={JsonPage} />
        <Route path='/topbartest' element={<Topbar/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


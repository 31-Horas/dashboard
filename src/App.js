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

  return (
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
  );
}

export default App;


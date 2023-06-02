import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/Login/Login';
import Welcome from './pages/Welcome/Welcome';
import JsonPage from './pages/JsonPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignupForm />}/>
        <Route path="/json" component={JsonPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

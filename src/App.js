import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './UI/Header';
import LandingPage from './LoginRegis/LandingPage';
import LoginForm from './LoginRegis/LoginForm';
import RegistrationForm from './LoginRegis/RegistrationForm';
import ForgotPass from './LoginRegis/ForgotPass';
import HomePage from './LoginRegis/HomePage';
import TrainingRequestInitiator from './Components/TrainingRequestInitiator/TrainingRequestInitiator';
import './App.css';
import Dashboard from './Components/DashBoard/DashBoard';


export default function App() {
  return (
    <div>
      <Header /> 
      {/* <div style={{ padding: '20px' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Training Request Form</h1>
      </div> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/register" element={<RegistrationForm />} />
          <Route exact path="/forgotpass" element={<ForgotPass />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/dashboard" element={<Dashboard />} /> 
          <Route exact path="/trainreq" element={<TrainingRequestInitiator />} />         
        </Routes>
      </Router>
    </div>
  );
}

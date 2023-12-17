import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from './pages/homepage/home';
import SignInPage from './pages/signpage/sign';
import UserPage from './pages/accountpage/account';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />}/>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

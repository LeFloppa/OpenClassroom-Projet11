import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from './pages/homepage/home';
import LoginPage from './pages/signpage/sign';
import UserPage from './pages/accountpage/account';
import EditPage from "./pages/editpage/editpage";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleUser, faRightFromBracket, faGear, faChevronRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleUser, faRightFromBracket, faGear, faChevronRight);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />}/>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/edit-username" element={<EditPage/>}/>
        <Route path="/profile" element={<UserPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import AppHeader from './components/header';
import FormContent from './components/form';
import AppFooter from './components/footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import Sidebar2 from './components/sidebar2';
import Content2 from './components/content2';

function App() {
  return (
    <Router>
      <AppHeader />
      <div className="flex">
        <Sidebar2 />
        <Routes>
          <Route path="/" element={<Navigate to="/category/phone" />} />
          <Route path="/category/:category" element={<Content2 />} />
        </Routes>
        <FormContent />
      </div>
      <AppFooter />
    </Router>
  );
}

export default App;

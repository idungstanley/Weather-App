import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Component/Nav/Navbar';
import Check from './Pages/Check';

function WeatherApp() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </Router>
    </main>
  );
}

export default WeatherApp;

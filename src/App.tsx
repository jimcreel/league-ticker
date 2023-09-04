import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import ScheduleView from './ScheduleView';
import Linescore from './Linescore';
import Footer from './Footer';

function App() {
  return (
    <>
    <Nav />
    <ScheduleView />
    <Linescore />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

import React from 'react';
import Question from "../components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import About from '../components/About';
import Home from '../components/Home';

// the browser router goes first so it chaches the routes

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes> //defines routes order.
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

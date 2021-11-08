import React from 'react';
import Question from "../components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import About from '../components/About';
import Home from '../components/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek" element={<Question quiz={'geek'} />} />
        <Route path="/games" element={<Question quiz={'games'} />} />
        <Route path="/harry" element={<Question quiz={'harry'} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import './App.css';
import Home from './components/home/home.jsx';
import Barra from './components/navbar/barra.jsx';
import Movie from "./components/Movie/movie";
import Movies from "./components/movies/movies";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Barra />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route index path="/home" element={<Home/>} />
          <Route  path="/movies" element={<Movies/>} />
          <Route  path="/movie/:id/:title" element={<Movie/>} />
          <Route path="*" element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

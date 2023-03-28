import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Welcome } from "./components/Welcome";
import { TopSongs } from "./components/TopSongs";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='TopSongs' element={<TopSongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

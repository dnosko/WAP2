import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Welcome } from "./pages/Welcome";
import { TopSongsPage } from "./pages/TopSongsPage";
import { ArtistMeterPage } from "./pages/ArtistMeterPage";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='topsongs' element={<TopSongsPage />} />
        <Route path='artists' element={<ArtistMeterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

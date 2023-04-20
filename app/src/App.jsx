import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Welcome } from "./pages/Welcome";
import { TopSongsPage } from "./pages/TopSongsPage";
import { ArtistMeterPage } from "./pages/ArtistMeterPage";
import { DiscoverPage } from "./pages/DiscoverPage";
import "./css/App.css";
import AuthProvider from "./context/AuthContext";
import MusicDnaPage from "./pages/MusicDna/MusicDnaPage";
import PlaylistTimelinePage from "./pages/PlaylistTimeline/PlaylistTimelinePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='topsongs' element={<TopSongsPage />} />
          <Route path='artists' element={<ArtistMeterPage />} />
          <Route path='music-dna' element={<MusicDnaPage />} />
          <Route path='playlist-timeline' element={<PlaylistTimelinePage />} />
          <Route path='discover' element={<DiscoverPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

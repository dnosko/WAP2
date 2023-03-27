import { React, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import { Welcome } from './components/Welcome';
import {TopSongs}   from './components/TopSongs';
import './css/App.css'

function App() {
  const [access_token, setAccessToken] = useState(localStorage.getItem('access_token') || null);
  const [refresh_token, setRefreshToken] = useState(localStorage.getItem('refresh_token') || null);

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="welcome" element={<Welcome access_token={access_token} handler_token={setAccessToken} />} />
      <Route path="TopSongs" element={<TopSongs access_token={access_token } />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App

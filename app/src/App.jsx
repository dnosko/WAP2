import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage'
import Welcome   from './components/Welcome';
import './css/App.css'

function App() {
return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
      <Route path="welcome" element={<Welcome />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App

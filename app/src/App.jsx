import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Welcome } from "./components/Welcome";
import { TopSongs } from "./components/TopSongs";
import "./css/App.css";
import AuthProvider from "./components/context/authContext";

function App() {
  return (
	<AuthProvider>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='topSongs' element={<TopSongs />} />
			</Routes>
		</BrowserRouter>
	</AuthProvider>
  );
}

export default App;

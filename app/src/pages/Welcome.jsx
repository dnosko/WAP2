import { React, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../api/login";
import Auth from "../components/Auth";
import { AuthContext } from "../context/authContext";

import "../css/App.css";
import "../css/Welcome.css";

import earth from "../assets/earth-svgrepo-com.svg";
import jupiter from "../assets/jupiter-svgrepo-com.svg";
import mars from "../assets/mars-svgrepo-com.svg";
import mercury from "../assets/mercury-svgrepo-com.svg";
import moon from "../assets/moon-svgrepo-com.svg";
import neptune from "../assets/neptune-svgrepo-com.svg";
import saturn from "../assets/saturn-svgrepo-com.svg";
import uranus from "../assets/uranus-svgrepo-com.svg";
import venus from "../assets/venus-svgrepo-com.svg";



export function Welcome(props) {
  const [loading, setLoading] = useState(true);
  const { auth, setState } = useContext(AuthContext);
  const [searchParams] = useSearchParams();

  useEffect(() => {
	const token = searchParams.get('token');
	if (token) {
		localStorage.setItem('token', token);
		setState(true);
		setToken(token);
	}
	setLoading(false);
  }, [setState])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/topsongs`;
    navigate(path);
  };

  document.getElementById("body").style.background = "blueviolet";
  document.getElementById("body").style.color = "aliceblue";

  return (
	<Auth loading={loading}>
		<div onClick={routeChange} onDragExit={routeChange} className='App next'>
			<div>
			<img src={saturn} className='planets saturn '></img>
			<img src={earth} className='planets earth'></img>
			<img src={moon} className='planets moon'></img>
			</div>
			<img src={neptune} className='planets neptune'></img>
			<div className='heading'>
			<img src={jupiter} className='planets jupiter'></img>
			<h1>Ready? Let's dive in!</h1>
			<img src={mars} className='planets mars'></img>
			</div>
			<img src={mercury} className='planets mercury'></img>
			<img src={uranus} className='planets uranus'></img>
			<img src={venus} className='planets venus'></img>
		</div>
	</Auth>
  );
}

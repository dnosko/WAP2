import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../userauth";
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
  let access_token = useAuth();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/TopSongs`;
    navigate(path);
  };

  document.getElementById("body").style.background = "blueviolet";
  document.getElementById("body").style.color = "aliceblue";

  return (
    <div onClick={routeChange} onDragExit={routeChange} className='App next'>
      {access_token == null ? (
        <h1>Access not granted!</h1>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

import ArrowButton from "../components/ArrowButton";
import { React } from "react";
import Songs from "../components/Songs";
import wave from "../assets/vecteezy_abstract-colorful-wave.png";
import Auth from "../components/Auth";
import TimeCapsule from "../components/TimeCapsule";

export function DiscoverPage(props) {
  document.getElementById("body").style.background = "black";
  document.getElementById("body").style.color = "white";
  /*document.getElementById("body").style.backgroundImage = `url(${wave})`;
  document.getElementById("body").style.backgroundSize = "180rem 80rem";
  document.getElementById("body").style.backgroundRepeat = "no-repeat";
  document.getElementById("body").style.backgroundPosition = "50% 20%";
  document.getElementById("body").style.animation = "none";*/

  return (
    <Auth>
      <div className='App'>
        <a href='/discover'></a>
        <h1 className='top-songs'>These songs are your favorite!</h1>
        <TimeCapsule />
        <div className='bottom'>
          <ArrowButton link='/artists' direction='left'></ArrowButton>
          <ArrowButton link='/' direction='right'></ArrowButton>
        </div>
      </div>
    </Auth>
  );
}

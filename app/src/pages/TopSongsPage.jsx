import ArrowButton from "../components/ArrowButton";
import { React } from "react";
import Songs from "../components/Songs";
import wave from "../assets/vecteezy_abstract-colorful-wave.png";
import Auth from "../components/Auth";

export function TopSongsPage(props) {

  document.getElementById("body").style.background = "orange";
  document.getElementById("body").style.color = "white";
  document.getElementById("body").style.backgroundImage = `url(${wave})`;
  document.getElementById("body").style.backgroundSize = "150rem 50rem";
  document.getElementById("body").style.backgroundRepeat = "no-repeat";
  document.getElementById("body").style.backgroundPosition = "50% 80%";

  return (
	<Auth>
		<div className='App'>
			<a href='/welcome'></a>
			<h1 className='top-songs'>These songs are your favorite!</h1>
			<Songs/>
			<div className='bottom'>
				<ArrowButton link='/' direction='left'></ArrowButton>
				<ArrowButton link='/artists' direction='right'></ArrowButton>
			</div>
		</div>
	</Auth>
  );
}

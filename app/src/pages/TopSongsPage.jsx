import ArrowButton from "../components/ArrowButton";
import { React } from "react";
import Songs from "../components/Songs";
import wave from "../assets/vecteezy_abstract-colorful-wave.png";
import Auth from "../components/Auth";
import Logout from "../components/Logout";
import PageWrapper from "../components/PageWrapper";

export function TopSongsPage(props) {
  document.getElementById("body").style.background = "orange";
  document.getElementById("body").style.color = "white";
  document.getElementById("body").style.backgroundImage = `url(${wave})`;
  document.getElementById("body").style.backgroundSize = "180rem 80rem";
  document.getElementById("body").style.backgroundRepeat = "no-repeat";
  document.getElementById("body").style.backgroundPosition = "50% 20%";
  document.getElementById("body").style.animation = "none";

  return (
	<PageWrapper left='/' right='/artists'>
		<div className='App'>
			<h1 className='top-songs'>These songs are your favorite!</h1>
			<Songs />
		</div>
	</PageWrapper>
  );
}

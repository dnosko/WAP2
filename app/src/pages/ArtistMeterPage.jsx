import ArrowButton from "../components/ArrowButton";
import { React } from "react";
import ArtistMeter from "../components/ArtistMeter";
import cloud from "../assets/cloud2.png";
import Auth from "../components/Auth";
import Logout from "../components/Logout";
import PageWrapper from "../components/PageWrapper";

export function ArtistMeterPage(props) {
  document.getElementById("body").style.background = "#62BD0E";
  document.getElementById("body").style.color = "white";
  document.getElementById("body").style.backgroundImage = `url(${cloud})`;
  document.getElementById("body").style.backgroundSize = "75rem 75rem";
  document.getElementById("body").style.backgroundRepeat = "repeat-x";
  document.getElementById("body").style.animation =
    "animatedBackground 6000s linear infinite normal";

  return (
	<PageWrapper left='/topsongs' right='/music-dna'>
		<div className='App'>
			<>
			<h1 className='top-songs'>Artist Meter!</h1>
			<ArtistMeter></ArtistMeter>
			</>
		</div>
	</PageWrapper>
  );
}

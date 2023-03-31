import ArrowButton from "../components/ArrowButton";
import { useAuth } from "../userauth";
import { React } from "react";
import ArtistMeter from "../components/ArtistMeter";

export function ArtistMeterPage(props) {
  let access_token = useAuth();

  document.getElementById("body").style.background = "#62BD0E";
  document.getElementById("body").style.color = "white";

  return (
    <div className='App'>
      <a href='/welcome'></a>
      {access_token == null ? (
        <h1>Not granted</h1>
      ) : (
        <>
          <h1 className='top-songs'>Artist Meter!</h1>
          <ArtistMeter token={access_token}></ArtistMeter>
        </>
      )}
      <div className='bottom'>
        <ArrowButton link='/topsongs' direction='left'></ArrowButton>
        <ArrowButton link='' direction='right'></ArrowButton>
      </div>
    </div>
  );
}

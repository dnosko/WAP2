import ArrowButton from "../components/ArrowButton";
import { useAuth } from "../userauth";
import { React } from "react";
import Songs from "../components/Songs";
import wave from "../assets/vecteezy_abstract-colorful-wave.png";

export function TopSongsPage(props) {
  let access_token = useAuth();

  document.getElementById("body").style.background = "orange";
  document.getElementById("body").style.color = "white";
  document.getElementById("body").style.backgroundImage = `url(${wave})`;
  document.getElementById("body").style.backgroundSize = "150rem 50rem";
  document.getElementById("body").style.backgroundRepeat = "no-repeat";
  document.getElementById("body").style.backgroundPosition = "50% 80%";

  return (
    <div className='App'>
      <a href='/welcome'></a>
      {access_token == null ? (
        <h1>Not granted</h1>
      ) : (
        <>
          <h1 className='top-songs'>These songs are your favorite!</h1>

          <Songs token={access_token}></Songs>
        </>
      )}
      <div className='bottom'>
        <ArrowButton link='/welcome' direction='left'></ArrowButton>
        <ArrowButton link='/artists' direction='right'></ArrowButton>
      </div>
    </div>
  );
}

import ArrowButton from "../components/ArrowButton";
import { React, useState } from "react";
import Auth from "../components/Auth";
import TimeCapsule from "../components/TimeCapsule";
import "../css/TimeCapsule.css";

export function DiscoverPage(props) {
  const [showTime, setShowTime] = useState(0);
  document.getElementById("body").style.background = "black";
  document.getElementById("body").style.color = "white";

  function showComponent(year) {
    setShowTime(year);
  }
  const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

  const buttons = years.map((year) => (
    <button
      id={year}
      className='time-capsule'
      onClick={() => showComponent(year)}
    >
      {year}
    </button>
  ));

  return (
    <Auth>
      <div className='App'>
        <a href='/discover'></a>
        <h1 className='top-songs'>Time Capsule!</h1>
        <h2 className='time-capsule'>Songs across time matching your taste</h2>

        {showTime === 0 ? (
          buttons
        ) : (
          <>
            <div className='grid-container time-capsule'>
              <button id='0' onClick={() => showComponent(0)}></button>
              <TimeCapsule year={1980} />
              <button id='1990' onClick={() => showComponent(90)}></button>
            </div>
          </>
        )}
        <div className='bottom'>
          <ArrowButton link='/artists' direction='left'></ArrowButton>
          <ArrowButton link='/' direction='right'></ArrowButton>
        </div>
      </div>
    </Auth>
  );
}

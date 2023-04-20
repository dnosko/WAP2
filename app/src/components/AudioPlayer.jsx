import { React, useEffect, useState, useRef } from "react";
import "../css/TimeCapsule.css";

export default function AudioPlayer(props) {
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    if (audioRef.current.readyState >= 3) {
      // check if audio is ready to play
      audioRef.current.play();
    } else {
      audioRef.current.addEventListener("canplaythrough", () => {
        // wait for audio to be ready to play
        audioRef.current.play();
      });
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current.readyState >= 3) {
      // check if audio is ready to pause
      audioRef.current.pause();
    } else {
      audioRef.current.addEventListener("canplaythrough", () => {
        // wait for audio to be ready to pause
        audioRef.current.pause();
      });
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={props.preview_url} preload='auto' />
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {props.children}
      </div>
    </div>
  );
}

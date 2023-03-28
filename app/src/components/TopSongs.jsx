import ArrowButton from "./ArrowButton";
import { useAuth } from "../userauth";
import { React, useEffect, useState } from "react";
import axios from "axios";
import Songs from "./Songs";

export function TopSongs(props) {
  let access_token = useAuth();

  document.getElementById("body").style.background = "orange";
  document.getElementById("body").style.color = "white";

  return (
    <div className='App'>
      <a href='/welcome'></a>
      {access_token == null ? (
        <h1>Not granted</h1>
      ) : (
        <Songs token={access_token}></Songs>
      )}
      <div className='bottom'>
        <ArrowButton link='/welcome' direction='left'></ArrowButton>
        <ArrowButton link='' direction='right'></ArrowButton>
      </div>
    </div>
  );
}

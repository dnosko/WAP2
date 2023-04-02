import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Songs(props) {
  const [songs, setSongs] = useState([]);

  const header = { Authorization: `Bearer ${props.token}` };
  const params = {
    limit: props.limit,
    time_range: props.range,
  };
  const searchParams = new URLSearchParams(params);

  useEffect(() => {
    if (props.token) {
      axios
        .get(
          `https://api.spotify.com/v1/me/top/tracks?${searchParams.toString()}`,
          { headers: header }
        )
        .then((res) => {
          console.log(res);
          setSongs(res.data.items);
        })
        .catch((err) => {
          console.error(err);
          window.location = "/welcome";
        });
    }
  }, []);

  const songItems = songs.map((song, index) => (
    <div
      className={`row card song${index == 0 ? "" : " top-border"}`}
      key={song.id}
    >
      <div className='albumImg'>
        <img className='album' src={song.album.images[2].url}></img>
      </div>
      <div className='songscard'>
        <a className='song text'>
          {song.name} - {song.album.artists[0].name}
        </a>
      </div>
    </div>
  ));

  return (
    <div className='rectangle-card text'>
      <h2 className='top-songs'>{props.heading} </h2>
      <div className='rectangle-card'>{songItems}</div>
    </div>
  );
}

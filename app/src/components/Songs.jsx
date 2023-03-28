import { React, useEffect, useState } from "react";
import axios from "axios";

export default function Songs(props) {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    if (props.token) {
      axios
        .get("http://localhost:3001/topSongs", {
          params: {
            time_range: "short_term",
            limit: 5,
          },
        })
        .then((res) => {
          console.log(res);
          setSongs(res.data);
        })
        .catch(() => {
          window.location = "/";
        });
    }
  }, []);

  const songItems = songs.map((song) => (
    <div class='card song' key={song.id}>
      <div class='albumImg'>
        <img class='album' src={song.album.images[2].url}></img>
      </div>
      <div class='songscard'>
        <a class='song text'>
          {song.name} - {song.album.artists[0].name}
        </a>
      </div>
    </div>
  ));

  return (
    <div class='topSongs'>
      <h2 class='topSongs'>Recent loves</h2>
      {songItems}
    </div>
  );
}

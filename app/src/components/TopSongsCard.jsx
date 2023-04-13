import { React, useEffect, useState } from "react";
import { getTopTracks } from "../api/tracksApi";

export default function Songs(props) {
  const [songs, setSongs] = useState([]);

  	useEffect(() => {
		const getItems = async () => {
			const items = await getTopTracks(props.limit, props.range);
			if (items) {
				setSongs(items);
			}  
		}
		getItems();
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

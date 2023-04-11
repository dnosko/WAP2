import { React, useEffect, useState } from "react";
import { recommendations } from "../api/recommendationsApi";
import { filterYear } from "../utils";

export default function Recommendations(props) {
  const [recommended, setRecommended] = useState([]);
  let limit = 50;
  console.log(props.seeds);
  useEffect(() => {
    const getRecommendations = async () => {
      const rec = await recommendations(props.seeds, limit);
      if (rec) {
        console.log(rec.tracks);
        let filtered = filterYear(rec.tracks, [
          "1950",
          "1951",
          "1952",
          "1953",
          "1954",
          "1955",
          "1956",
          "1957",
          "1958",
          "1959",
        ]);

        // dont add duplicates
        filtered = filtered.filter(
          (item) => !recommended.some((r) => r.id === item.id)
        );
        console.log(filtered);
        setRecommended((prevRecommended) => [...prevRecommended, ...filtered]);
        limit += 20;
      }
    };
    console.log(recommended);
    if (recommended.length < 5) {
      getRecommendations();
    }
  }, [recommended]);

  const songs = recommended.map((song, index) => (
    <div
      className={`row card song${index == 0 ? "" : " top-border"}`}
      key={song.id}
    >
      <div className='albumImg'>
        <img className='album' src={song.album.images[2].url}></img>
      </div>
      <div className='songscard'>
        <a className='song'>
          {song.name} - {song.album.artists[0].name}
        </a>
        <a className='song '> {song.album.release_date} </a>
      </div>
    </div>
  ));

  return <div>{songs} </div>;
}

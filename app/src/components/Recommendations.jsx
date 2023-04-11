import { React, useEffect, useState } from "react";
import { recommendations } from "../api/recommendationsApi";
import { getTracks } from "../api/getTracksApi";
import "../css/TimeCapsule.css";
/* Filter items by year of release date */
function filterYear(arr, years) {
  const filteredByYear = arr.filter(({ album }) =>
    [...years].includes(album.release_date.slice(0, 4))
  );
  return filteredByYear;
}

export default function Recommendations(props) {
  const [recommended, setRecommended] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  let limit = 50;
  let years = Array.from({ length: 10 }, (_, index) => props.year + index).map(
    String
  );

  const fetchTracks = async () => {
    const items = await getTracks(recommended);
    if (items) setTracks(items);
  };

  useEffect(() => {
    if (props.seeds) {
      const getRecommendations = async () => {
        const rec = await recommendations(props.seeds, limit);
        if (rec) {
          console.log(rec.tracks);
          // filter decade
          let filtered = filterYear(rec.tracks, years);
          let ids = filtered.map((item) => {
            return item.id;
          });
          // dont add duplicates
          ids = ids.filter((item) => !recommended.some((r) => r === item));

          setRecommended((prevRecommended) => [...prevRecommended, ...ids]);
          limit += 20;
        }
      };
      if (recommended.length >= 5) {
        fetchTracks();
        setLoading(false);
      } else {
        getRecommendations();
      }
    }
  }, [props.seeds, recommended]);
  //console.log(recommended);
  console.log(tracks);
  const songs = () => {
    return tracks.slice(0, 5).map((song, index) => (
      <div className={`${index == 0 ? "" : " recommendations-border "}`}>
        <tr className='recommendations ' key={song.id}>
          <tr>
            <td className='albumImg'>
              <a href={song.album.external_urls.spotify} target='_blank'>
                <img
                  className='album recommendation'
                  src={song.album.images[2].url}
                ></img>
              </a>
            </td>
            <td>
              <div className='songscard'>
                <a
                  className='recommendations'
                  href={song.album.external_urls.spotify}
                  target='_blank'
                >
                  {song.name}
                </a>
                <br></br>
                <a
                  className='recommendations'
                  href={song.album.external_urls.spotify}
                  target='_blank'
                >
                  {song.album.artists[0].name} (
                  {song.album.release_date.slice(0, 4)})
                </a>
              </div>
            </td>
          </tr>
        </tr>
      </div>
    ));
  };

  return (
    <table className='recommendations'>
      {loading ? <a>LOADING</a> : songs()}
    </table>
  );
}

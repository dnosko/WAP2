import { React, useEffect, useState } from "react";
import { recommendations } from "../api/recommendationsApi";
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
  const [loading, setLoading] = useState(true);
  let limit = 100;
  let years = Array.from({ length: 10 }, (_, index) => props.year + index).map(
    String
  );

  useEffect(() => {
    setRecommended([]);
    setLoading(true);
  }, [props.year]);

  useEffect(() => {
    if (props.seeds) {
      const getRecommendations = async () => {
        console.log(limit);
        const rec = await recommendations(props.seeds, limit);
        if (rec) {
          console.log(rec.tracks);
          // filter decade
          let filtered = filterYear(rec.tracks, years);
          let ids = filtered.map((item) => {
            return item.id;
          });
          // dont add duplicates
          filtered = filtered.filter(
            (item) => !recommended.some((r) => r.id === item.id)
          );

          setRecommended((prevRecommended) => [
            ...prevRecommended,
            ...filtered,
          ]);
        }
      };
      if (recommended.length >= 5) {
        setLoading(false);
      } else {
        getRecommendations();
      }
    }
  }, [props.seeds, recommended]);
  //console.log(recommended);
  console.log(recommended);
  const songs = () => {
    return recommended.slice(0, 5).map((song, index) => (
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

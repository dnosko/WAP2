import { React, useEffect, useState, useRef } from "react";
import { recommendations } from "../api/recommendationsApi";
import "../css/TimeCapsule.css";
import heart from "../assets/heart-svgrepo-com.svg";
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
  const audioRef = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
  };
  let limit = 100;
  let years = Array.from({ length: 10 }, (_, index) => props.year + index).map(
    String
  );

  useEffect(() => {
    setRecommended([]);
    setLoading(true);
  }, [props.year]);

  const handleMouseEnter = (id) => {
    audioRef[id].current.play();
  };

  const handleMouseLeave = (id) => {
    audioRef[id].current.pause();
  };

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

  const songs = () => {
    //const audioRef = useRef(null);
    return recommended.slice(0, 5).map((song, index) => {
      return (
        <div className={`${index == 0 ? "" : " recommendations-border "}`}>
          <audio ref={audioRef[index]} src={song.preview_url} preload='auto' />
          <tr className='recommendations ' key={song.id}>
            <tr>
              <td className='albumImg'>
                <img
                  className='album recommendation'
                  src={song.album.images[2].url}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ cursor: "pointer" }}
                ></img>
              </td>
              <td>
                <div className='songscard'>
                  <a className='recommendations'>{song.name}</a>
                  <br></br>
                  <a className='recommendations'>
                    {song.album.artists[0].name} (
                    {song.album.release_date.slice(0, 4)})
                  </a>
                </div>
              </td>
              <td className='heart'>
                <a href={song.album.external_urls.spotify} target='_blank'>
                  <img className='heart' src={heart}></img>
                </a>
              </td>
            </tr>
          </tr>
        </div>
      );
    });
  };

  return (
    <table className='recommendations'>
      {loading ? <a>LOADING</a> : songs()}
    </table>
  );
}

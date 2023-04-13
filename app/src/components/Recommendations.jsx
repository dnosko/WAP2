import { React, useEffect, useState, useRef } from "react";
import { recommendations } from "../api/recommendationsApi";
import { getRandomItems } from "../utils";
import AudioPlayer from "./AudioPlayer";
import "../css/TimeCapsule.css";
import heart from "../assets/heart-svgrepo-com.svg";
import refreshSvg from "../assets/refresh-svgrepo-com.svg";

export default function Recommendations(props) {
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  let limit = 100;
  let years = Array.from({ length: 10 }, (_, index) => props.year + index).map(
    String
  );

  /* Filter items by year of release date.
     Params:
        arr: array to filter
        years: array of wanted years 
  */
  const filterYear = (arr, years) => {
    const filteredByYear = arr.filter(({ album }) =>
      [...years].includes(album.release_date.slice(0, 4))
    );
    return filteredByYear;
  };

  // if year was changed empty recommended
  useEffect(() => {
    setRecommended([]);
    setLoading(true);
  }, [props.year]);

  // on refresh get new songs
  useEffect(() => {
    setLoading(true);
    let recommended_sliced = recommended.slice(5);
    setRecommended(recommended_sliced);
  }, [refresh]);

  useEffect(() => {
    if (props.seeds.length > 0) {
      /* Get recommended songs for given decade */
      const getRecommendations = async () => {
        let randomSeeds = getRandomItems(props.seeds, 5);

        const rec = await recommendations(randomSeeds, limit, props.features);

        if (rec) {
          // filter decade
          let filtered = filterYear(rec.tracks, years);
          // dont add duplicates
          filtered = filtered.filter(
            (item) =>
              !recommended.some((r) => r.id === item.id) &&
              item.preview_url !== null
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
    return recommended.slice(0, 5).map((song, index) => {
      return (
        <AudioPlayer preview_url={song.preview_url}>
          <div className='recommendations-border'>
            <tr className='recommendations ' key={song.id}>
              <tr>
                <td className='albumImg'>
                  <img
                    className='album recommendation'
                    src={song.album.images[2].url}
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
        </AudioPlayer>
      );
    });
  };

  return (
    <table className='recommendations'>
      <tr className='heading recommendation'>
        <th className='recommendation'>
          <h3 className='time-capsule'>{props.heading}</h3>
          <img
            className='refresh recommendation'
            src={refreshSvg}
            onClick={() => setRefresh(refresh + 1)}
          ></img>
        </th>
      </tr>
      {loading ? <a>LOADING</a> : songs()}
    </table>
  );
}

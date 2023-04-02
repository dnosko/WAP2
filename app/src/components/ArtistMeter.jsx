import { React, useEffect, useState } from "react";
import axios from "axios";
import fetchArtists from "./fetchArtists";
import ArtistMeterCategories from "./ArtistMeterCategories";
import { average } from "../utils";

function getText(avg_popularity) {
  if (avg_popularity >= 0.0 && avg_popularity <= 30.0)
    return {
      heading: " You're an explorer",
      content:
        "You like to listen to music gems before others discover them. \
        You have an insatiable curiosity for discovering new and obscure music from around the world.\
        You seek out music that's innovative, original, and challenging, and you're not afraid to take risks \
        and experiment with new genres and styles.",
    };
  else if (avg_popularity > 30.0 && avg_popularity <= 50.0)
    return {
      heading: "You're a trendsetter",
      content:
        "You're a trendsetter. You have a knack for discovering artists before they hit the mainstream,\
         and you enjoy championing artists who are breaking new ground and challenging the status quo. \
         You appreciate music that's authentic, expressive, and unique, \
         and you're always on the lookout for the next great discovery.",
    };
  else if (avg_popularity > 50.0 && avg_popularity <= 75.0)
    return {
      heading: "You're a tastemaker",
      content:
        "You have an ear for artists who are on the verge of mainstream success\
         but still maintain a degree of independence and originality. You enjoy music that's fresh, dynamic, \
         and forward-thinking and you're drawn to artists who are not afraid to take risks and explore new sonic territories.",
    };
  else
    return {
      heading: "You're a pop star baby",
      content:
        "You appreciate music that's polished, professional, and expertly produced,\
         and you're drawn to artists who have a strong and distinctive brand and image. \
         You enjoy listening to music that's catchy, upbeat, and accessible, \
         and you're always up-to-date with the latest trends and hits",
    };
}

export default function ArtistMeter(props) {
  const [artists, setArtists] = useState([]);
  //const [avg_popularity, setAvgPopularity] = useState(0);
  //const [popularity, setPopularity] = useState([]);

  useEffect(() => {
    var params = {
      limit: 50,
      time_range: "long_term",
      offset: 0,
    };
    fetchArtists(props.token, params).then((data) => {
      setArtists(data);
      console.log(artists);
    });
  }, [props.token]);

  /*useEffect(() => {
    const pop = artists.map((obj) => obj.popularity);
    setPopularity(pop);
    const avg = average(popularity);
    setAvgPopularity(avg);
  }, [artists]);*/
  const popularity = artists.map((obj) => obj.popularity);
  const avg_popularity = average(popularity);
  const text = getText(avg_popularity);
  return (
    <div className='grid-container'>
      <div className='card artist-meter'>
        <h2 className='artist-meter'>{text.heading}</h2>
        <div className='center'>
          <a className='artist-meter'>{text.content}</a>
        </div>
      </div>
      <div class='vl center'> </div>
      <div className='artist-meter offset'>
        <ArtistMeterCategories
          artists={artists}
          popularity={popularity}
        ></ArtistMeterCategories>
      </div>
    </div>
  );
}

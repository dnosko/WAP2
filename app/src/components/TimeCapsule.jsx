import { React, useEffect, useState } from "react";
import { search } from "../api/searchApi";
import Recommendations from "./Recommendations";
import "../css/TimeCapsule.css";

export default function TimeCapsule(props) {
  const [seeds, setSeeds] = useState([]);
  const limit = 30;
  const range = `${props.year}-${props.year + 9}`;
  const heading = props.year.toString().slice(2, 4) + "s";

  useEffect(() => {
    const getSeeds = async () => {
      const items = await search("track", range, limit);
      if (items) {
        let ids = items.tracks.items.map((item) => item.id);
        setSeeds(ids);
      }
    };
    if (seeds.length == 0) {
      getSeeds();
    }
  }, [props.year]);

  return (
    <div className='all-time-songs'>
      <div className='capsule'>
        <h3 className='time-capsule'>{heading}</h3>
      </div>
      <Recommendations
        seeds={seeds}
        year={props.year}
        features={props.features}
      />
    </div>
  );
}

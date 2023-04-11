import { React, useEffect, useState } from "react";
import { search } from "../api/searchApi";
import Recommendations from "./Recommendations";

export default function TimeCapsule(props) {
  const [seeds, setSeeds] = useState([]);
  const limit = 5;
  const range = `${props.year}-${props.year + 9}`;

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
  }, []);

  return (
    <div className='all-time-songs'>
      <Recommendations seeds={seeds} year={props.year} />
    </div>
  );
}

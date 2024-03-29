import { React } from "react";
import TopSongsCard from "./TopSongsCard";

export default function Songs(props) {
  const limit = 5;

  return (
    <div className='grid-container top-songs'>
      <div className='all-time-songs'>
        <TopSongsCard
          token={props.token}
          limit={limit}
          range={"long_term"}
          heading='So many hours spent together'
        ></TopSongsCard>
      </div>
      <TopSongsCard
        token={props.token}
        limit={limit}
        range={"medium_term"}
        heading='6 months? Its getting serious'
      ></TopSongsCard>
      <div className='new-songs'>
        <TopSongsCard
          token={props.token}
          limit={limit}
          range={"short_term"}
          heading='New loves at first sound'
        ></TopSongsCard>
      </div>
    </div>
  );
}

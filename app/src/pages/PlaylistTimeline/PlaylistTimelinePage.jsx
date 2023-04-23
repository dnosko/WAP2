import "../../css/timeline.css";
import { useEffect, useRef, useState } from "react";
import { getUserPlaylists } from "../../api/playlistsApi";
import { getTimelineItems } from "./playlistTimeline";
import Timeline from "../../components/Timeline";
import cubes from "../../assets/cubes.jpg";
import Dropdown from "../../components/Dropdown";
import PageWrapper from "../../components/PageWrapper";

export default function PlaylistTimelinePage(props) {
  const scrl = useRef(null);
  const [playlists, setPlaylists] = useState([]);
  const [timelineItems, setTimelineItems] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({
    id: undefined,
    name: "",
  });

  useEffect(() => {
    const getItems = async () => {
      const items = await getUserPlaylists(5);
      if (items) {
        setPlaylists(items.map((i) => ({ name: i.name, id: i.id })));
        setCurrentPlaylist({ name: items[0].name, id: items[0].id });
      }
    };
    getItems();
  }, []);

  useEffect(() => {
    const getItems = async () => {
      const items = await getTimelineItems(currentPlaylist.id);
      if (items) {
        setTimelineItems(items);
        scrl.current.scrollLeft = 0;
      }
    };
    getItems();
  }, [currentPlaylist]);

  function slide(shift) {
    scrl.current.scrollLeft += shift;
  }

  document.getElementById("body").style.backgroundImage = `url(${cubes})`;
  document.getElementById("body").style.backgroundRepeat = "no-repeat";
  document.getElementById("body").style.backgroundSize = "cover";

  return (
    <PageWrapper left='/music-dna' right='/discover'>
      <div className='playlist-timeline'>
        <h1 className='timeline'>Pick Your Playlist</h1>
        <Dropdown
          select={currentPlaylist}
          items={playlists}
          onSelect={setCurrentPlaylist}
        />
        <div className='timeline-content'>
          <button className='timeline-slider left' onClick={() => slide(-600)}>
            {"<"}
          </button>
          <div className='timeline-box' ref={scrl}>
            <Timeline items={timelineItems} />
          </div>
          <button className='timeline-slider right' onClick={() => slide(600)}>
            {">"}
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

import Auth from '../../components/Auth';
import ArrowButton from '../../components/ArrowButton';
import '../../css/timeline.css';
import { useEffect, useRef, useState } from 'react';
import { getUserPlaylists } from '../../api/playlistsApi';
import { getTimelineItems } from './playlistTimeline';
import Timeline from '../../components/Timeline';
import cubes from '../../assets/cubes.jpg'
import Dropdown from '../../components/Dropdown';


export default function PlaylistTimelinePage(props) {
	const scrl = useRef(null);
	const [playlists, setPlaylists] = useState([]);
	const [timelineItems, setTimelineItems] = useState([]);
	const [currentPlaylist, setCurrentPlaylist] = useState(undefined);

	useEffect(() => {
	  const getItems = async () => {
		const items = await getUserPlaylists(5);
		if (items) {
			setPlaylists(items.map(i => ({ name: i.name, id: i.id })));
			setCurrentPlaylist(items[0].id)
		}
	  }
	  getItems();
	}, []);

	useEffect(() => {
		const getItems = async () => {
		  const items = await getTimelineItems(currentPlaylist);
		  if (items) {
			setTimelineItems(items);
			scrl.current.scrollLeft = 0;
		  }
		}
		getItems();
	  }, [currentPlaylist]);

	function slide(shift) {
		scrl.current.scrollLeft += shift;
	}

	document.getElementById("body").style.backgroundImage = `url(${cubes})`;
	document.getElementById("body").style.backgroundRepeat = 'no-repeat';
	document.getElementById("body").style.backgroundSize = 'cover';

	return (
		<Auth>
		<div className='playlist-timeline'>
			<h1 className='timeline'>Pick Your Playlist</h1>
			<Dropdown items={playlists} onSelect={setCurrentPlaylist}/>
			<div className='timeline-content'>
				<button className='timeline-slider left' onClick={() => slide(-600)}>{'<'}</button>
				<div className='timeline-box' ref={scrl}>
					<Timeline items={timelineItems}/>
				</div>
				<button className='timeline-slider right'  onClick={() => slide(600)}>{'>'}</button>
			</div>
			<div className='bottom'>
				<ArrowButton link='/music-dna' direction='left'></ArrowButton>
				<ArrowButton link='/' direction='right'></ArrowButton>
			</div>
		</div>
		</Auth>
	)
}
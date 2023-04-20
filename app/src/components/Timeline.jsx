import SongArtistCard from './SongArtistCard';

function Timeline(props) {
	const top = [];
	const bottom = [];
	const makeItem = (track, top) => (
		<SongArtistCard
				album={track.album.images[1].url}
				artist={track.artists[0].name}
				song={track.name}
				pointUp={!top}	
		/>
	) 

	props.items.forEach((it, idx) => {
		if ((idx % 2) == 0) top.push(makeItem(it.track, true));
		else bottom.push(makeItem(it.track, false));
	});

	const points = props.items.map((i, idx) => {
		console.log(i.release)
		const date = new Date(i.release);
		const dmy = `${date.getDate()}.${date.getMonth()}. ${date.getFullYear()}`
		return (
			<div className='bar-point' key={idx}>{dmy}</div>
		)
	} );

	const barWidth = props.items.length * (50 + 120) + 100;
	document.documentElement.style.setProperty('--timeline-bar-width', `${barWidth}px`);

	return (
		<div className='scroll-content' >
			<div className='row my-top'>
				{top}
			</div>
			<div className='bar'>
				{points}
			</div>
			<div className='row my-bottom'>
				{bottom}
			</div>		
		</div>
	)
}

export default Timeline;
import '../css/songArtistCard.css';

export default function SongArtistCard(props) {
	return (
		<div className={props.pointUp ? 'song-artist-card-wrapper t-bottom' :  'song-artist-card-wrapper t-top'}>
		{props.pointUp && <div className='pointer point-up'/>}
		<div className='song-artist-card'>
		<div className='song-artist-card-body' style={{backgroundImage: `url(${props.album})`}}>
			<div className='card-band'>
				<p className='card-band-song'>{props.song}</p>
				<p className='card-band-artist'>{props.artist}</p>
			</div>
		</div>
		</div>
		{!props.pointUp && <div className='pointer point-down'/>}
		</div>
	)
}
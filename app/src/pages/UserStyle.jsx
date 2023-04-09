import { useEffect, useState } from "react";
import Auth from "../components/Auth";
import { getStyleCategory } from "../components/userStyle";
import '../css/userStyle.css';

const unmatched = {
	title: "Loading",
	description: 'Your style analysis is loading...',
	features: [],
	background: 'black'
}

const categories = [
	{
		title: "Party Starters",
		description: 'High danceability, high energy, high valence. Music in this category is perfect for getting the party started and keeping the energy level high. Examples could include upbeat pop, EDM, and dance music.',
		features: ['HHH', 'HHM', 'HMM', 'HLH'],
		background: 'white'
	},{
		title: "Feel-good Anthems",
		description: ' High danceability, high energy, moderate to high valence. Music in this category is uplifting, positive, and designed to put a smile on your face. Examples could include upbeat pop, rock, and soul music.',
		features: ['MHH', "MHM", 'LMM', 'LHM', 'HLM'],
		background: '#C70039'
	},{
		title:  "Smooth Grooves",
		description: ' Moderate to high danceability, moderate energy, high valence. Music in this category is smooth, soulful, and designed to make you feel good. Examples could include R&B, funk, and soul music.',
		features: ['MMH', 'HMH', 'LMH'],
		background: 'white'
	},{
		title: "Mellow Vibes",
		description: ' Low to moderate danceability, low to moderate energy, moderate to high valence. Music in this category is laid-back, relaxed, and designed to create a chill atmosphere. Examples could include acoustic, indie, and folk music.',
		features: ['MMM', 'LMM', 'MLH', 'LLH'],
		background: '#48A9A6'
	},{
		title: "Dark and Intense",
		description: 'Low to moderate danceability, high energy, low valence. Music in this category is intense, moody, and designed to create a sense of tension or unease. Examples could include heavy metal, industrial, and hard rock music.',
		features: ['HHL', 'MHL', 'LHL', 'HML', 'HLL'],
		background: 'white',
	},{
		title: "Reflective and Emotional",
		description: 'Low to moderate danceability, low to moderate energy, low to moderate valence. Music in this category is introspective, emotional, and designed to create a sense of contemplation or melancholy. Examples could include singer-songwriter, indie, and alternative music.',
		features: ['LML', 'LLM', 'MLM', 'MLL', 'LLL', 'MML'],
		background: 'white'
	},
]


function UserStyle(props) {
	const [style, setStyle] = useState(unmatched);
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		const getIt = async () => {
			const res = await getStyleCategory(categories, unmatched);
			setStyle(res.category);
			setSongs(res.representatives);
			console.log(res)
		}
		getIt();
	}, []);

	document.getElementById("body").style.background = style.background;

	const songItems = songs.map((song) => (
		<div
		  key={song.id}
		  className='songItem'
		>
		  <div className='albumImg'>
			<img className='album' src={song.album.images[2].url}></img>
		  </div>
		  <div className='songscard'>
			<a className='song text'>
			  {song.name} - {song.album.artists[0].name}
			</a>
		  </div>
		</div>
	));

	return ( 
		<Auth>
			<div className='userStyleContent'>
				<h3>Your favourite style is</h3> 
				<h1>{style.title}</h1>
				<div>{style.description}</div>
				<div>Some of your favourite songs that fit this style</div>
				<div className='styleSongs'>{songItems}</div>
			</div>
		</Auth>
	)
}

export default UserStyle;
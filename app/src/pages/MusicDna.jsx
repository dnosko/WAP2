import { useEffect, useState } from "react";
import Auth from "../components/Auth";
import { getDnaCategory } from "../components/musicDna";
import '../css/musicDna.css';
import cloud from '../assets/cloud_white.svg';
import fist from '../assets/fist_white.svg';
import footprints from '../assets/footprints_white.svg';
import glass from '../assets/magn_glass_white.svg';
import storm from '../assets/storm_white.svg';
import wing from '../assets/wing_white.svg';
import DnaChart from "../components/DnaChart";
import maverick from '../assets/maverick.jpg'
import { explorerDesc, maverickDesc, rebelDesc, sageDesc, stormDesc, wandererDesc } from "./categoryDescriptions";

const fVal = {
	low: 0,
	moderate: 1,
	high: 2,
}

const loading = {
	title: "Loading",
	description: 'Your DNA analysis is loading...',
	features: {},
	icon: '',
	backgroundColor: 'black',
	backgroundImg: '',
	
}

const unmatched = {
	title: "Musical Maverick",
	description: maverickDesc,
	features: {
	}, 
	icon: wing,
	backgroundColor: '#58D68D',
	backgroundImg: `url(${maverick})`,
	textShadow: '#931EFF',
	boxShadow: 'rgba(147, 30, 255, 0.3)',
	color: 'white',
	graphColors: ['#ED47D1', '#3814ba', '#ffab00']
}

const categories = [
	{
		title: "Dreamy Wanderer",
		description: wandererDesc, 
		features: {
			acousticness: [fVal.high],
			energy: [fVal.low, fVal.moderate], 
			instrumentalness: [fVal.moderate],
			speechiness: [fVal.low],
			valence: [fVal.moderate, fVal.high],
			tempo: [fVal.moderate] 
		},
		icon: footprints,
		backgroundColor: '#58D68D',
		backgroundImg: `url(${maverick})`,
		textShadow: '#931EFF',
		boxShadow: 'rgba(147, 30, 255, 0.3)',
		color: 'white',
		graphColors: ['#ED47D1', '#3814ba', '#ffab00']
		
	},{
		title: "Electric Explorer",
		features: {
			acousticness: [fVal.low, fVal.moderate],
			energy: [fVal.high], 
			instrumentalness: [fVal.high],
			speechiness: [fVal.low],
			valence: [fVal.moderate, fVal.high],
			tempo: [fVal.high] 
		},
		description: explorerDesc,
		background: '#C70039',
		icon: glass
	},{
		title:  "Rhytmic Rebel",
		features: {
			acousticness: [fVal.low],
			energy: [fVal.high], 
			instrumentalness: [fVal.low],
			speechiness: [fVal.moderate, fVal.high],
			valence: [fVal.moderate, fVal.low],
			tempo: [fVal.high] 
		},
		description: rebelDesc,
		background: 'white',
		icon: fist
	},{
		title: "Soulful Sage",
		features: {
			acousticness: [fVal.high],
			energy: [fVal.low, fVal.moderate], 
			instrumentalness: [fVal.low, fVal.moderate],
			speechiness: [fVal.moderate],
			valence: [fVal.high],
			tempo: [fVal.moderate] 
		},
		description: sageDesc,
		background: '#48A9A6',
		icon: cloud
	},{
		title: "Brooding Storm",
		features: {
			acousticness: [fVal.low],
			energy: [fVal.low, fVal.moderate], 
			instrumentalness: [fVal.low, fVal.moderate],
			speechiness: [fVal.moderate],
			valence: [fVal.low, fVal.moderate],
			tempo: [fVal.low, fVal.moderate] 
		},
		description: stormDesc,
		background: 'white',
		icon: storm
	},
]

function MusicDna(props) {
	const [category, setCategory] = useState(loading);
	const [songs, setSongs] = useState([]);
	const [avg, setAvg] = useState([]);

	useEffect(() => {
		const getIt = async () => {
			const res = await getDnaCategory(categories, unmatched);
			setCategory(categories[0]);
			setSongs(res.representatives);
			setAvg(res.avg);
			console.log('got the result')
			console.log(res)
		}
		getIt();
	}, []);

	useEffect(() => {
		console.log('setproperty')
		document.documentElement.style.setProperty('--background-color', category.backgroundColor);
		document.documentElement.style.setProperty('--text-shadow', category.textShadow);
		document.documentElement.style.setProperty('--box-shadow', category.boxShadow);
		document.documentElement.style.setProperty('--color', category.color);
		document.getElementById("body").style.backgroundImage = category.backgroundImg;
		document.getElementById("body").style.backgroundSize = 'cover';
	}, [category])

	const songItems = songs.map((song, index) => (
		<div
		  className={`row card song${index == 0 ? "" : " top-border"}`}
		  key={song.id}
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
			<div className="container">
				<div className={`user-dna-content ${category.backgroundClass}`}>
					<h3>Your Music DNA is</h3> 
					<img src={category.icon} className='dna-icon'></img>
					<h1>{category.title}</h1>
					<p>{category.description}</p>
					<div className='dna-detail'>
						<DnaChart avg={avg} colors={category.graphColors}/>
						<div className='rectangle-card-dna text'>
							<div className='rectangle-card-dna'>{songItems}</div>
						</div>
					</div>
				</div>
			</div>
		</Auth>
	)
}

export default MusicDna;
export {fVal};
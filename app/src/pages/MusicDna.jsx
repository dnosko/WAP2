import { useEffect, useState } from "react";
import Auth from "../components/Auth";
import { getDnaCategory } from "../components/musicDna";
import '../css/musicDna.css';
import cloud from '../assets/cloud_white.svg';
import fist from '../assets/fist_white.svg';
import footprints from '../assets/footprints_white.svg';
import glass from '../assets/magn_glass_white.svg';
import storm_swirl from '../assets/storm_white.svg';
import wing from '../assets/wing_white.svg';
import DnaChart from "../components/DnaChart";
import maverick from '../assets/maverick.jpg';
import sage from '../assets/sage.jpg';
import storm from '../assets/storm.jpg';
import rebel from '../assets/rebel.jpg';
import explorer from '../assets/explorer.jpg';
import dreamer from '../assets/dreamer.jpg';
import { explorerDesc, maverickDesc, rebelDesc, sageDesc, stormDesc, wandererDesc } from "./categoryDescriptions";
import ArrowButton from "../components/ArrowButton";

const fVal = {
	low: 0,
	moderate: 1,
	high: 2,
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
		// features: {
		// 	acousticness: [fVal.high],
		// 	energy: [fVal.low, fVal.moderate], 
		// 	instrumentalness: [fVal.moderate],
		// 	speechiness: [fVal.low],
		// 	valence: [fVal.moderate, fVal.high],
		// 	tempo: [fVal.moderate] 
		// },
		features: {
			acousticness: [fVal.high],
			energy: [fVal.low, fVal.moderate],
			valence: [fVal.moderate, fVal.high],
			tempo: [fVal.low, fVal.moderate]
		},
		icon: footprints,
		backgroundColor: 'rgba(137,207,240, 0.6)',
		backgroundImg: `url(${dreamer})`,
		textShadow: '#de7681',
		boxShadow: 'rgba(138, 79, 119, 0.3)',
		color: 'white',
		graphColors: ['#F7838F', '#89cff0', '#ed71bd']
		
	},{
		title: "Electric Explorer",
		// features: {
		// 	acousticness: [fVal.low, fVal.moderate],
		// 	energy: [fVal.high], 
		// 	instrumentalness: [fVal.high],
		// 	speechiness: [fVal.low],
		// 	valence: [fVal.moderate, fVal.high],
		// 	tempo: [fVal.high] 
		// },
		features: {
			energy: [fVal.high], 
			valence: [fVal.moderate, fVal.high],
			tempo: [fVal.high],
			danceability: [fVal.moderate, fVal.high],
		},
		description: explorerDesc,
		icon: glass,
		backgroundColor: 'rgba(255,216,0, 1)',
		backgroundImg: `url(${explorer})`,
		textShadow: '#b20769',
		boxShadow: 'rgba(178, 7, 105, 0.3)',
		color: 'white',
		graphColors: ['#df0983', '#ffd800', '#212143']
	},{
		title:  "Rhytmic Rebel",
		// features: {
		// 	acousticness: [fVal.low],
		// 	energy: [fVal.high], 
		// 	instrumentalness: [fVal.low],
		// 	speechiness: [fVal.moderate, fVal.high],
		// 	valence: [fVal.moderate, fVal.low],
		// 	tempo: [fVal.high] 
		// },
		features: {
			acousticness: [fVal.low, fVal.moderate],
			energy: [fVal.high],
			valence: [fVal.moderate, fVal.low],
			tempo: [fVal.high],
			danceability: [fVal.high]
		},
		description: rebelDesc,
		background: 'white',
		icon: fist,
		backgroundColor: 'rgba(55,15,11, 0.75)',
		backgroundImg: `url(${rebel})`,
		textShadow: '#a01a0e',
		boxShadow: 'rgba(51, 58, 113, 0.3)',
		color: 'aliceblue',
		graphColors: ['#6b0101', '#ff5607', '#ffc100']
	},{
		title: "Soulful Sage",
		features: {
			acousticness: [fVal.high],
			energy: [fVal.low, fVal.moderate],
			valence: [fVal.high],
			tempo: [fVal.moderate] 
		},
		description: sageDesc,
		icon: cloud,
		backgroundColor: 'rgba(149, 194, 127, 0.9)', // '#95c27f',
		backgroundImg: `url(${sage})`,
		textShadow: '#215144',
		boxShadow: 'rgba(33,81,68, 0.3)',
		color: 'white',
		graphColors: ['#61a37f', '#0e1d24', '#c5de8a']
	},{
		title: "Brooding Storm",
		// features: {
		// 	acousticness: [fVal.low],
		// 	energy: [fVal.low, fVal.moderate], 
		// 	instrumentalness: [fVal.low, fVal.moderate],
		// 	speechiness: [fVal.moderate],
		// 	valence: [fVal.low, fVal.moderate],
		// 	tempo: [fVal.low, fVal.moderate] 
		// },
		features: {
			energy: [fVal.low, fVal.moderate], 
			valence: [fVal.low, fVal.moderate, fVal.high],
			tempo: [fVal.low, fVal.moderate] 
		},
		description: stormDesc,
		icon: storm_swirl,
		backgroundColor: 'rgba(26, 28, 65, 0.75)',
		backgroundImg: `url(${storm})`,
		textShadow: '#333a71',
		boxShadow: 'rgba(51, 58, 113, 0.3)',
		color: 'aliceblue',
		graphColors: ['#2e376e', '#0f1025', '#787a82']
	},
]

function MusicDna(props) {
	const [loading, setLoading] = useState(true);
	const [category, setCategory] = useState(unmatched);
	const [songs, setSongs] = useState([]);
	const [avg, setAvg] = useState([]);

	useEffect(() => {
		const getIt = async () => {
			const res = await getDnaCategory(categories, unmatched);
			if (res) {
				setCategory(res.category);
				setSongs(res.representatives);
				setAvg(res.avg);
				setLoading(false);
			}
		}
		getIt();
	}, []);

	useEffect(() => {
		document.documentElement.style.setProperty('--background-color', category.backgroundColor);
		document.documentElement.style.setProperty('--text-shadow', category.textShadow);
		document.documentElement.style.setProperty('--box-shadow', category.boxShadow);
		document.documentElement.style.setProperty('--color', category.color);
		document.getElementById("body").style.backgroundImage = category.backgroundImg;
		document.getElementById("body").style.backgroundSize = 'cover';
	}, [category])

	document.getElementById("body").style.backgroundRepeat = 'no-repeat';

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
				<ArrowButton link='/artists' direction='left'></ArrowButton>
				
				{loading ? <h1 className="loading">Loading your Music DNA analysis...</h1> :
					<div className={`user-dna-content ${category.backgroundClass}`}>
						<h3>Your Music DNA is</h3> 
						<img src={category.icon} className='dna-icon'></img>
						<h1>{category.title}</h1>
						<p>{category.description}</p>
						<div className='dna-detail'>
							<div className="card-desc">
							Checkout your genetic makeup
							<DnaChart avg={avg} colors={category.graphColors}/>
							</div>
							<div className='rectangle-card-dna text card-desc'>
								These songs are just so YOU
								<div className='rectangle-card-dna'>{songItems}</div>
							</div>
						</div>
					</div>
				}
				<ArrowButton link='/' direction='right'></ArrowButton>
			</div>
		</Auth>
	)
}

export default MusicDna;
export {fVal};
import cloud from '../../assets/cloud_white.svg';
import fist from '../../assets/fist_white.svg';
import footprints from '../../assets/footprints_white.svg';
import glass from '../../assets/magn_glass_white.svg';
import storm_swirl from '../../assets/storm_white.svg';
import wing from '../../assets/wing_white.svg';
import maverick from '../../assets/maverick.jpg';
import sage from '../../assets/sage.jpg';
import storm from '../../assets/storm.jpg';
import rebel from '../../assets/rebel.jpg';
import explorer from '../../assets/explorer.jpg';
import dreamer from '../../assets/dreamer.jpg';

const fVal = {
	low: 0,
	moderate: 1,
	high: 2,
}

const wandererDesc = "You value introspection and emotional expression in your music, enjoy the mellow and laid-back sound that is conducive to relaxation and reflection. You may also appreciate the natural and organic sound of acoustic instruments, and prefer music that is not too loud or overwhelming."

const explorerDesc = "You value precision and technical skill in the instrumentation, and prefer music that is driven by electronic elements. You may also appreciate the positive and energetic nature of the music, and use it as a way to motivate yourself or enhance your mood."

const rebelDesc = "You value lyrics that are bold, expressive, and attention-grabbing. The raw and unfiltered nature of the vocals can add a sense of authenticity and urgency to the music. You appreciate the fast-paced and intense nature of the music, and use it as a way to release stress, aggression, or frustration."

const sageDesc = "You value the emotional depth and authenticity of acoustic music. You may appreciate the way that the lyrics and vocals are the main focus of the music, allowing for a greater sense of connection and meaning. You are drawn to the positive and uplifting nature of the music, and use it as a way to lift your spirits or find solace in difficult times."

const stormDesc = "You value introspection and emotional depth in your music. Dark and moody music can reflect the complexities of the human experience, and provide a sense of catharsis and understanding. You are drawn to the slower and brooding quality of the music, and use it as a way to process difficult emotions."

const maverickDesc = "You value experimentation and diversity in your musical tastes and appreciate the way that music can challenge your expectations and push you out of your comfort zone. You are drawn to the sheer variety and unpredictability of music, and use it as a way to explore new emotions, experiences, and perspectives."


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

export {fVal, unmatched, categories};
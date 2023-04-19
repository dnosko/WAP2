import { getTopTracks, getTracksFeatures } from "../api/tracksApi";
import { average } from "../utils";
import { fVal } from "../pages/MusicDna";

async function getDnaCategory(categories, unmatched) {
	const tracks = await getTopTracks(100, 'long_term');
	if (!tracks) return undefined;
	const features = await getTracksFeatures(tracks.map(t => t.id));
	if (!features) return undefined;

	const featureAvgs = {
		energy: average(features.map(f => f.energy)),
		acoustic: average(features.map(f => f.acousticness)), 
		instrumental: average(features.map(f => f.instrumentalness)),
		speech: average(features.map(f => f.speechiness)),
		valence: average(features.map(f => f.valence)),
		tempo: normaliseTempo(average(features.map(f => f.tempo)))
	};
	const featureGrades = {
		energy: getFeatureGrade(average(features.map(f => f.energy))),
		acousticness: getFeatureGrade(average(features.map(f => f.acousticness))), 
		instrumentalness: getFeatureGrade(average(features.map(f => f.instrumentalness))),
		speechiness: getFeatureGrade(average(features.map(f => f.speechiness))),
		valence: getFeatureGrade(average(features.map(f => f.valence))),
		tempo:  getFeatureGrade(normaliseTempo(average(features.map(f => f.tempo)))),
	};
	const cat = findCategory(featureGrades, categories, unmatched);
	const repre = cat.title == 'Musical Maverick' ? tracks.slice(0,3) : getDnaRepresentatives(tracks, features, cat);

	return {
		category: cat,
		representatives: repre,
		avg: featureAvgs
	}
}

function normaliseTempo(tempo) {
	return tempo > 130 ? 1 : tempo/130;
}

function findCategory(value, categories, unmatched) {
	const cat = categories.filter(c => {
		for (const [key, val] of Object.entries(c.features)) {
			if (!fitsFeature(val, value[key])) return false;
		}
		return true;
	});
	console.log(cat)
	if (cat.length < 1) { return unmatched; }
	else return cat[0];
}

function fitsFeature(catVals, val) {
	return catVals.indexOf(val) != -1;
}

function getFeatureGrade(feature) {
	if (feature <= 0.33) return fVal.low;
	else if (feature > 0.66) return fVal.high;
	else return fVal.moderate;
}

function getDnaRepresentatives(tracks, features, category) {
	let result = [];
	for (let f of features) {
		const songFeats = {
			energy: getFeatureGrade(f.energy),
			acousticness: getFeatureGrade(f.acousticness), 
			instrumentalness: getFeatureGrade(f.instrumentalness),
			speechiness: getFeatureGrade(f.speechiness),
			valence: getFeatureGrade(f.valence),
			tempo:  getFeatureGrade(f.tempo, true),
		};
		var add = true;
		for (const [key, val] of Object.entries(category.features)) {
			if (!fitsFeature(val, songFeats[key])) {
				add = false;
				break;
			} 
		}
		if (add) {
			result.push(f.id);
			if (result.length == 3) break;
		}
	}
	return tracks.filter(t => result.includes(t.id));
}

export {getDnaCategory};
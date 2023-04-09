import { getTopTracks, getTracksFeatures } from "../api/tracksApi";
import { average } from "../utils";

async function getStyleCategory(categories, unmatched) {
	console.log(categories)
	const tracks = await getTopTracks(100, 'long_term');
	const features = await getTracksFeatures(tracks.map(t => t.id));

	const avgDanceability = average(features.map(f => f.danceability))
	const avgEnergy = average(features.map(f => f.energy))
	const avgValence = average(features.map(f => f.valence))

	const featureGrades = getFeatureGrade(avgDanceability) + getFeatureGrade(avgEnergy) + getFeatureGrade(avgValence);
	const cat = findCategory(featureGrades, categories, unmatched);
	const repre = getStyleRepresentatives(tracks, features, cat);
	console.log(cat)
	console.log(repre)
	return {
		category: cat,
		representatives: repre
	}
}

function findCategory(value, categories, unmatched) {
	console.log(categories)
	for (let c of categories) {
		if (c.features.indexOf(value) > -1) {
			console.log(c)
			return c;
		}
	}
	return unmatched;
}

function getFeatureGrade(feature) {
	if (feature <= 0.33) return 'L';
	else if (feature > 0.66) return 'H';
	else return 'M';
}

function getStyleRepresentatives(tracks, features, category) {
	let i = 0;
	let result = [];
	for (let f of features) {
		const featureStr = getFeatureGrade(f.danceability) + getFeatureGrade(f.energy) + getFeatureGrade(f.valence);
		if (category.features.indexOf(featureStr) > -1) {
			result.push(f.id);
			if (result.length == 3) break;
		}
	}
	return tracks.filter(t => result.includes(t.id));
}

export {getStyleCategory};
import { authorizedAxios } from "./login";
import { average, median, quantile25, quantile75, quantile, roundAllInObject } from "../utils";

async function getTopTracks(limit, range) {
	const searchParams = new URLSearchParams({
		limit: limit,
		time_range: range,
	});
	return authorizedAxios.get(`https://api.spotify.com/v1/me/top/tracks?${searchParams.toString()}`)
		.then((res) => {
			console.log(res);
			return res.data.items;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function getTracks(tracks) {

	const searchParams = new URLSearchParams({
		ids: tracks
	});
	return authorizedAxios.get(`https://api.spotify.com/v1/tracks?${searchParams.toString()}`)
		.then((res) => {
			console.log(res);
			return res.data.tracks;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function getTracksFeatures(trackIds) {
	const searchParams = new URLSearchParams({
		ids: trackIds,
	});
	return authorizedAxios.get(`https://api.spotify.com/v1/audio-features?${searchParams.toString()}`)
		.then((res) => {
			console.log(res);
			return res.data.audio_features;
		})
		.catch((err) => {
			console.error(err);
		});
}

async function getFeatures() {
	const tracks = await getTopTracks(50, 'long_term');
	const features = await getTracksFeatures(tracks.map(t => t.id));

	const danceability = features.map(f => f.danceability);
	const energy = features.map(f => f.energy)
	const valence = features.map(f => f.valence)
	const tempo = features.map(f => f.tempo)
	const acousticness = features.map(f => f.acousticness)
	const instrumentalness = features.map(f => f.acousticness)

	const params = {
		min_danceability: quantile25(danceability),
		target_danceability: average(danceability),
		max_danceability: quantile(danceability, 1),
		min_energy: quantile25(energy),
		max_energy: quantile(energy, 1),
		target_energy: average(energy),
		min_valence: quantile25(valence),
		target_valence: average(valence),
		max_valence: quantile(valence, 1),
		min_tempo: quantile25(tempo),
		max_tempo: quantile(tempo, 1),
		target_tempo: average(tempo),
		max_instrumentalness: quantile75(instrumentalness),
		//target_instrumentalness: average(instrumentalness),
	}

	return roundAllInObject(params, 3);
}

export { getTopTracks, getTracks, getTracksFeatures, getFeatures };
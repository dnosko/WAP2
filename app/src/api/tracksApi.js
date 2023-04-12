import { authorizedAxios } from "./login";
import { average, quantile25, quantile75 } from "../utils";

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
	const tracks = await getTopTracks(100, 'medium_term');
	const features = await getTracksFeatures(tracks.map(t => t.id));

	const danceability = features.map(f => f.danceability);
	const energy = features.map(f => f.energy)
	const valence = features.map(f => f.valence)
	const tempo = features.map(f => f.tempo)
	const acousticness = features.map(f => f.acousticness)
	const instrumentalness = features.map(f => f.acousticness)

	return {
		min_danceability: quantile25(danceability),
		max_danceability: quantile75(danceability),
		min_energy: quantile25(energy),
		max_energy: quantile75(energy),
		min_valence: quantile25(valence),
		max_valence: quantile75(valence),
		min_tempo: quantile(tempo, 15),
		max_tempo: quantile(tempo, 90),
		target_acousticness: average(acousticness),
		target_instrumentalness: average(instrumentalness)
	}
}

export { getTopTracks, getTracks, getTracksFeatures, getFeatures };
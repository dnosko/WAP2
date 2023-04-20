import { authorizedAxios } from "./login";

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

export {getTopTracks, getTracksFeatures};
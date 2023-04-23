import { authorizedAxios } from "./login";

function getUserPlaylists(limit) {
	const searchParams = new URLSearchParams({
		limit: limit,
	});
	return authorizedAxios.get(`https://api.spotify.com/v1/me/playlists?${searchParams.toString()}`)
		.then((res) => {
			return res.data.items;
		})
		.catch((err) => {
			console.error(err);
		});
}

function getPlaylistItems(id) {
	const searchParams = new URLSearchParams({
		fields: 'items(track(name,album(name,images,release_date),artists(name,images)))'
	});
	return authorizedAxios.get(`https://api.spotify.com/v1/playlists/${id}`)
		.then((res) => {
			return res.data.tracks.items;
		})
		.catch((err) => {
			console.error(err);
		});
}

export { getUserPlaylists, getPlaylistItems };
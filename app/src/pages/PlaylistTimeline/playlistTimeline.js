import { getPlaylistItems } from "../../api/playlistsApi";


async function getTimelineItems(currentPlaylistId) {
	const items = await getPlaylistItems(currentPlaylistId);
	
	if (items) {
		return processTracks(items);
	}
	return [];
	
}

const processTracks = (items) => {
	const res = items.map(item => ({
		release: item.track.album.release_date,
		track: item.track
	}))
	.sort((a, b) => (a.release > b.release) ? 1 : -1);
	console.log(res);
	return res;
}

export {getTimelineItems};
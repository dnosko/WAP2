import { getPlaylistItems } from "../../api/playlistsApi";

async function getTimelineItems(currentPlaylistId) {
	const items = await getPlaylistItems(currentPlaylistId);
	return items ? processTracks(items) : [];
}

const processTracks = (items) => {
	const res = items.map(item => ({
		release: item.track.album.release_date,
		track: item.track
	}))
	.sort((a, b) => (a.release > b.release) ? 1 : -1);
	return res;
}

export {getTimelineItems};
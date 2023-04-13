
import { authorizedAxios } from "./login";

async function getArtists(limit, range, offset) {
  let searchParams = new URLSearchParams({
	limit: limit,
	time_range: range,
	offset: offset,
  });
  return authorizedAxios.get(
      `https://api.spotify.com/v1/me/top/artists?${searchParams.toString()}`
    ).then((res => {
		if (res.status == 200) return res.data.items;
	})).catch((err) => {
    console.error(err);
  });
}
export {getArtists};
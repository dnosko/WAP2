
import axios from "axios";

async function fetchArtists(token, params) {
  if (!token) return [];
  const header = { Authorization: `Bearer ${token}` };

  let searchParams = new URLSearchParams(params);
  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/artists?${searchParams.toString()}`,
      { headers: header }
    );
    return response.data.items;
  } catch (err) {
    console.error(err);
  }
}
export default fetchArtists;
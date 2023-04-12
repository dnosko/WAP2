import { authorizedAxios } from "./login";

async function recommendations(seeds, limit = 5, params) {
    let searchParams;
    if (params == undefined) {
        searchParams = new URLSearchParams({
            seed_tracks: seeds,
            seed_artists: [],
            seed_genres: [],
            limit: limit,
            target_danceability: 0.5,
            target_energy: 0.5,
            min_tempo: 80,
            max_tempo: 140,
            target_valence: 0.5

        });
    }
    else {
        searchParams = new URLSearchParams({
            seed_tracks: seeds,
            seed_artists: [],
            seed_genres: [],
            limit: limit,
            ...params
        })
        console.log(searchParams)
    }
    return authorizedAxios.get(`https://api.spotify.com/v1/recommendations?${searchParams.toString()}`)
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

export { recommendations };
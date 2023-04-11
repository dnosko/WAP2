import { authorizedAxios } from "./login";

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

export { getTracks };
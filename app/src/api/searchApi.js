import { authorizedAxios } from "./login";

async function search(type = 'track', range = '2022', limit = 5, offset = 0) {
    const searchParams = new URLSearchParams({
        query: `year: ${range}`,
        type: type,
        limit: limit,
        offset: offset
    });
    return authorizedAxios.get(`https://api.spotify.com/v1/search?${searchParams.toString()}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err);
        });
}

export { search };
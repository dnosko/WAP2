import { getTopTracks, getTracksFeatures } from "../api/tracksApi";
import { average, quantile25, quantile75 } from "../utils";

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
        min_tempo: quantile25(tempo),
        max_tempo: quantile75(tempo),
        target_acousticness: average(acousticness),
        target_instrumentalness: average(instrumentalness)
    }
}

export { getFeatures };

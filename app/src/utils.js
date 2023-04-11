
export function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    return avg;
}

export function filterYear(arr, years) {
    const filteredByYear = arr.filter(({ album }) => [...years].includes(album.release_date.slice(0, 4)))
    return filteredByYear
}

function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    return avg;
}

const quantile = (arr, q) => {
    const sorted = arr.sort((a, b) => a - b);;
    let pos = (sorted.length - 1) * q;
    pos = Math.floor(pos);
    if (sorted[pos + 1] !== undefined) {
        return (sorted[pos] + sorted[pos + 1]) / 2;
    } else {
        return sorted[poa];
    }
};

const quantile25 = (arr) => quantile(arr, 0.25);
const quantile75 = (arr) => quantile(arr, 0.75);


/* get rnadom items from an array */
function getRandomItems(arr, num = 1) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

export { average, quantile25, quantile75, quantile, getRandomItems }
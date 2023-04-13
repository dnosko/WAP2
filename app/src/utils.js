/* Counts average of values of array */
function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    return avg;
}
/* Counts quantile for values in array
    Params:
        arr: array with values
        q: Float quantil (0-1)
*/
const quantile = (arr, q) => {
    const sorted = arr.sort((a, b) => a - b);;
    let pos = (sorted.length - 1) * q;
    pos = Math.floor(pos);
    console.log(sorted);
    if (sorted[pos + 1] !== undefined) {
        return (sorted[pos] + sorted[pos + 1]) / 2;
    } else {
        return sorted[pos];
    }
};

const quantile25 = (arr) => quantile(arr, 0.25);
const quantile75 = (arr) => quantile(arr, 0.75);
const median = (arr) => quantile(arr, 0.5);

/* gets random items from an array 
Params: 
    arr: array with values
    num: number of items to get
*/
function getRandomItems(arr, num = 1) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}

/* Rounds all numbers in object to specified decimal places.
Params: 
    obj: Object with numbers as values
    decimals: Number decimal places
 */
function roundAllInObject(obj, decimals) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            obj[prop] = parseFloat(obj[prop].toFixed(decimals));;
        }
    }
    return obj;
}


export { average, quantile25, quantile75, quantile, median, getRandomItems, roundAllInObject }
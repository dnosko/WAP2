
export function average(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    return avg;
}

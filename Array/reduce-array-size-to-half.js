/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    if (arr == null || !arr.length) {
        return 0;
    }
    const hash = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]] += 1;
        } else {
            hash[arr[i]] = 1;
        }
    }

    const freqValues = Object.values(hash).sort((a, b) => b - a);

    for (let i = 0; i < freqValues.length; i++) {
        count += freqValues[i];
        if (count >= arr.length / 2) {
            return i + 1;
        }
    }
};

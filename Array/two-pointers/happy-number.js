/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const hash = new Set();
    while (n !== 1 && !hash.has(n)) {
        hash.add(n);
        n = calcSq(n);
    }
    return n == 1;
};

const calcSq = (numString) => {
    return numString
        .toString()
        .split('')
        .reduce(function (sum, num) {
            return sum + Math.pow(num, 2);
        }, 0);
};

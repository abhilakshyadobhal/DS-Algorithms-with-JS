/**
 * @param {number[][]} mat
 * @return {number}
 *
 * For odd matrix we have subtract n/2 element from the final sum
 */
var diagonalSum = function (mat) {
    if (!mat.length || mat.length == null) {
        return 0;
    }
    let sum = 0;
    const n = mat.length;
    for (let i = 0; i < n; ++i) {
        sum += mat[i][i] + mat[i][n - i - 1];
    }
    if (n % 2 == 1) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }

    return sum;
};

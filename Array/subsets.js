/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (arr) {
    const res = [];
    const n = arr.length;
    const ans = [];

    function subQ(idx, res, arr, n) {
        if (idx == n) {
            let t = [];
            res.forEach((curr) => t.push(curr));
            ans.push(t);
            return;
        }
        res.push(arr[idx]);
        subQ(idx + 1, res, arr, n);
        res.pop();
        subQ(idx + 1, res, arr, n);
    }
    subQ(0, res, arr, n);
    return ans;
};

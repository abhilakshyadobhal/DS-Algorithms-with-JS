/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    if (nums == null) {
        return [];
    }
    const res = [];
    let i = 0,
        j = nums.length - 1;
    for (let p = nums.length - 1; p >= 0; p--) {
        if (Math.abs(nums[i]) > Math.abs(nums[j])) {
            res[p] = nums[i] * nums[i];
            i++;
        } else {
            res[p] = nums[j] * nums[j];
            j--;
        }
    }
    return res;
};

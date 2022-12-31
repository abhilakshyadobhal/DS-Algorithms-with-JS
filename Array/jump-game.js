/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums.length === 1) return true;
        if (nums[i] == 0) {
            continue;
        } else if (i > max) {
            return false;
        } else {
            max = Math.max(nums[i] + i, max);
        }
    }
    return max >= nums.length - 1;
};

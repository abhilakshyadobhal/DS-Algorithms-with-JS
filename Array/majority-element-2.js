/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    if (nums.length < 1) {
        return [];
    }
    const hash = {};
    const ans = [];
    const limit = nums.length / 3;

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]] = hash[nums[i]] + 1;
        } else {
            hash[nums[i]] = 1;
        }
    }

    for (key in hash) {
        if (hash[key] > limit) {
            ans.push(Number(key));
        }
    }
    return ans;
};

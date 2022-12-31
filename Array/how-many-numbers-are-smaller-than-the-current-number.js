/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Approach- We create a copy of nums and sort it. Then we store indexes first of ith element in hash
 * by the position of index we know for a sorted array how many numbers are preceding to it.
 */
var smallerNumbersThanCurrent = function (nums) {
    const hash = {};
    const orignal = [...nums];
    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] || hash[nums[i]] == 0) {
            continue;
        } else {
            hash[nums[i]] = i;
        }
    }
    for (let j = 0; j < orignal.length; j++) {
        ans.push(hash[orignal[j]]);
    }
    return ans;
};

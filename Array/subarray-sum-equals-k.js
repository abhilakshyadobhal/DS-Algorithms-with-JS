/** * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * Approach - Problem is of prefix sum, where we calculate sum as we iterate and check in hashmap if sum-k exists
 * in hashmap. In hashmap we will store sum and its frequencies which will mean there could be mutilple sub-array which
 * could sum to k
 * Time-Complexity- O(n)
 * Space Complexity- n
 */
var subarraySum = function (nums, k) {
    if (nums.length < 1) {
        return 0;
    }
    const map = { 0: 1 };
    let sum = 0,
        result = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map[sum - Number(k)]) {
            result += map[sum - Number(k)];
        }
        if (map[sum]) {
            map[sum] += 1;
        } else {
            map[sum] = 1;
        }
    }

    return result;
};

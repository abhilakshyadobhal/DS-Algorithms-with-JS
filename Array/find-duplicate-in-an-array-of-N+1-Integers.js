/**
 * @param {number[]} nums
 * @return {number}
 *
 * Approach- Add numbers with frequencies in hashmap, as soon as a number alreadt exists in hashmap which means
 *           its a repetitive number.
 *
 * Time-Complexity-  O(n)
 * Space-Complexity- O(n)
 */
var findDuplicate = function (nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            return nums[i];
        }
    }
};

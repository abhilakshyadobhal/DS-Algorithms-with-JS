/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Approach- we have created hash and stored frequencies of elements.
 * simple math approach is if the sum of key and K is in the map which means(x+k=y) then k=y-x
 *
 * Space complexity- O(1)
 * Time complexity-  o(n+m)
 */
var findPairs = function (nums, k) {
    const map = {};
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map[Number(nums[i])]) {
            map[Number(nums[i])] = map[Number(nums[i])] + 1;
        } else {
            map[Number(nums[i])] = 1;
        }
    }

    for (key in map) {
        if (k == 0) {
            if (map[+key + +k] >= 2) {
                ans++;
            }
        } else if (map[+key + +k]) {
            // ans.push(map[key],map[+key + +k])
            ans++;
        }
    }

    return ans;
};

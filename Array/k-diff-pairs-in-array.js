/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Approach- we have created hash and stored frequencies of elements.
 * simple math approach is if the sum of key and K is in the map which means(x+k=y) then k=y-x
 *
 *  First we will create map for counting frequencies of each element in the array.
    Now we have 2 cases over here as
    -->a) if k == 0 it means we need to count frequency of the same element by using map.get(i) method.
    -->b) we need to take counter approach for every element by adding k everytime and check whether that element is present in map or not.

    Instead of iterating through array, we will iterate through map.keySet() for getting unique elements.


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

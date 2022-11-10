/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Approach- This approach only work if array is sorted. Algo used here is two-pointers approach. One pointer will point at 0th index
 *           and other will be (length-1)th index. If sum of start pointer and end pointer is greater we move
 *           end pointer towards start and vice versa.
 *
 */
var twoSum = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start] + nums[end] == target) return [start + 1, end + 1];
        else if (nums[start] + nums[end] > target) {
            end--;
        } else {
            start++;
        }
    }
    return [];
};

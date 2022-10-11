/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * This is solved by Dutch National Flag Alogrithm in which we try to put certain numbers in start and end
 * and numbers in mid are untouched which sorts an array in a particular manner. Here we have 0,1,2 where all the
 * 0 should come in front and 2 in the end.
 *
 * Time Complexity-  O(n)
 * Space Complexity- O(1)
 */
var sortColors = function (nums) {
    if (nums.length == 0 || nums.length == 1) return [];
    let left = 0;
    let right = nums.length - 1;
    let curr = 0;

    while (curr <= right) {
        if (nums[curr] == 0) {
            nums[curr] = nums[left];
            nums[left] = 0;
            curr++;
            left++;
        } else if (nums[curr] == 1) {
            curr++;
        } else if (nums[curr] == 2) {
            nums[curr] = nums[right];
            nums[right] = 2;
            right--;
        }
    }
    return nums;
};

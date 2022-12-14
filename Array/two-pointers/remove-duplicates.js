/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums == null || !nums.length) {
        return 0;
    }
    let left = 1,
        right = 1;
    while (right < nums.length) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right];
            left++;
        }

        right++;
        console.log(nums);
    }
    return left;
};

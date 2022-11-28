/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    if (nums == null || !nums.length) {
        return 0;
    }

    let i = 0,
        j = 0,
        sum = 0,
        max;

    while (j < nums.length) {
        sum += nums[j];
        if (j - i + 1 < k) {
            j++;
        } else {
            max = max ? Math.max(sum / k, max) : sum / k;
            j++;
            sum -= nums[i];
            i++;
        }
    }
    return max;
};

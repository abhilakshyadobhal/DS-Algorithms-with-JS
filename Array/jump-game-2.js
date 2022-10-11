/**
 * @param {number[]} nums
 * @return {number}
 *
 * Approach-  The main idea is based on greedy. Let's say the range of the current jump is [curBegin, curEnd],
 *            curFarthest is the farthest point that all points in [curBegin, curEnd] can reach.
 *            Once the current point reaches curEnd, then trigger another jump,
 *            and set the new curEnd with curFarthest, then keep the above steps, as the following
 *
 * Time-Complexity- O(n)
 * Space-Complexity-O(1)
 *
 * leetcode-45
 */
var jump = function (nums) {
    let jumps = 0,
        end = 0,
        farthest = 0;
    let n = nums.length - 1;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, nums[i] + i);
        if (i == end) {
            jumps++;
            end = farthest;
        }
    }
    return jumps;
};

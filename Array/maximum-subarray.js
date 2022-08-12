/**
 * Approach- This solution follows Kadane's Algorithm where we
 *           only keep on adding adjacent elements if the sum of them
 *           is greator than 0 if not we reset it to 0 meaning ignoring the previous
 *           calc sum.
 * 
 * Time-Complexity:  O(n)
 * Space-Complexity: O(1) 
 */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let curr = 0,
    max = nums[0];

for (i in nums) {
    if (curr < 0) {
        curr = 0;
    }
    curr += nums[i];
    max = Math.max(curr, max);
    console.log(max, curr);
}



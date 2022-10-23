/**
 * @param {number[]} nums
 * @return {number[]}
 * Approach- Postive numbers will be at index 0,2,4... and negetive will be on 1,3,5... So we
 *           will push numbers on specific index depending upon pos/neg
 */
var rearrangeArray = function (nums) {
    let pos = 0,
        neg = 1;
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res[pos] = nums[i];
            pos += 2;
        } else {
            res[neg] = nums[i];
            neg += 2;
        }
    }
    return res;
};

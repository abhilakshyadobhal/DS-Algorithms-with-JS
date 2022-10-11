/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * Approach- Two pointers approach is used here initializing with even=0,odd=1,current iterator pointer.
 *           We'll also initialize empty array which we will fill on the go. If current element is even we place
 *           it in even index using even_index pointer and same for odd.
 *
 * Time Complexity-  O(n)
 * Space Complexity- O(1)
 */
var sortArrayByParityII = function (nums) {
    const ans = [];
    let even = 0,
        odd = 1;

    for (let k = 0; k < nums.length; k++) {
        if (nums[k] % 2 == 0) {
            ans[even] = nums[k];
            even += 2;
        } else {
            ans[odd] = nums[k];
            odd += 2;
        }
    }
    return ans;
};

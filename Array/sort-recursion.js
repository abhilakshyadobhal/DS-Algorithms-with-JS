/**
 * Time-Complexity- O(n)
 */
const nums = [1, 5, 3, 9];
const n = nums.length;
const swap = (a, b) => {
    let temp;
    temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
};

const fn = (i) => {
    if (i >= n / 2) {
        return;
    }
    swap(i, n - i - 1);
    fn(i + 1);
};
console.log(nums);
fn(0);

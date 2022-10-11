/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Approach-  We keep three pointers i where we update nums1 empty spaces with nums2 elements
 *           ,a last index of nums1 and b last index of nums2. We will compare nums1 & nums2 elements by
 *            using a,b indexes and the greater one will be put at nums1 index. We are doing comparisons b/w
 *            greatest elements from both arrays.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1,
        a = m - 1,
        b = n - 1;
    while (b >= 0) {
        if (nums1[a] > nums2[b]) {
            nums1[i] = nums1[a];
            i--;
            a--;
        } else {
            nums1[i] = nums2[b];
            i--;
            b--;
        }
    }
};

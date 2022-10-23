/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const obj = {},
        obj2 = {},
        ans = [];
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = nums1[i];
    }
    for (let j = 0; j < nums2.length; j++) {
        obj2[nums2[j]] = nums2[j];
    }
    for (let key in obj) {
        if (obj2[key] === 0) {
            ans.push(0);
        }
        if (obj2[key]) {
            ans.push(key);
        }
    }
    return ans;
};

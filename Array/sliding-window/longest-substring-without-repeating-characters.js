/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const hash = new Set();
    let left_pointer = 0;
    let right_pointer = 0;
    let max = 0;

    while (right_pointer < s.length) {
        if (!hash.has(s.charAt(right_pointer))) {
            hash.add(s.charAt(right_pointer));
            right_pointer += 1;
            max = Math.max(hash.size, max);
        } else {
            hash.delete(s.charAt(left_pointer));
            left_pointer += 1;
        }
    }
    return max;
};

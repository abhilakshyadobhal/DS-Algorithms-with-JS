/**
 * @param {string}
 * @return {number}
 * LeetCode- 409
 *
 * Approach- Palindromes are of two types EVEN & ODD. For even, count of elements on both the sides(from center) will
 *           be equal and in ODD the count of elements will be equal on both the sides against middle element.
 *           The idea is to maintain frequencies of characters in hashMap and take all even frequencies and
 *           take all ODD frequencies after subtracting one (count of ODD -1) to distribute odd elements
 *           equally on both the sides. If there is one ODD frequency in the hash, meaning count of one element
 *           is odd then add 1 to the result (MIDDLE ELEMENT)
 *
 * Time-Complexity-  O(N)
 * Space-Complexity- 0(1)
 */
var longestPalindrome = function (str) {
    const hash = {};
    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) hash[str[i]] = hash[str[i]] + 1;
        else hash[str[i]] = 1;
    }
    let ans = 0,
        odd = false;

    for (const k in hash) {
        if (hash[k] % 2 === 0) {
            ans += hash[k];
        } else {
            odd = true;
            ans += hash[k] - 1;
        }
    }
    return odd ? ans + 1 : ans;
};

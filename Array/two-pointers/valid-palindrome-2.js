/**
 * The approach here is to keep two pointers one left and one at the last element.
 * The we move inwards and compare if the left and right are equal if not then we
 * check if string can become palindrome by skipping left or right pointers to. We have to
 * check both scenarios l+1 and r-1 either of can make a string a palindrome.
 */
var validPalindrome = function (s) {
    if (s.split('').reverse().join('') === s) {
        return true;
    }
    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let l = 0,
        r = s.length - 1;

    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(l + 1, r) || isPalindrome(l, r - 1);
        }
        l++;
        r--;
    }

    return true;
};

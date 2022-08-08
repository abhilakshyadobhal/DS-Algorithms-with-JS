/**
 * @param {Number[]}
 * @returns {void} modifies existing array in place
 *
 * Approach- This is somewhat similar to DNF algorithm but quite simple in this case.
 * We'll keep left(0th index),right(end index),curr(iterator index).
 * If we find any element less than 0 we'll swap the left-most and curr index
 * and increment left & curr pointers. Else we'll keep moving ahead.
 *
 * Time Complexity  - O(n)
 * Space Complexity - O(1) constant space
 */

let curr = 0;
let right = arr.length - 1;
let left = 0,
    temp;

while (curr <= right) {
    if (arr[curr] < 0) {
        temp = arr[curr];
        arr[curr] = arr[left];
        arr[left] = temp;
        left++;
        curr++;
    } else {
        curr++;
    }
}

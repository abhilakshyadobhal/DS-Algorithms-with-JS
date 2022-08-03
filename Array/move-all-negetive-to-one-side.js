/**
 * If th 0th index is negetive then the swapping will occur will itself only
 * Time Complexity - O(n)
 * Space Complexity- O(1)
 */

const arr = [1, 2, -3, -5, 3, -4, 5];
let temp;
let x = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(i);
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
        x++;
    }
}

console.log(arr);

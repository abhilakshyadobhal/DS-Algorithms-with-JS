/**
 * Approach- It picks an element as a pivot and partitions the given array around the picked pivot.
 *           It performs the sorting in a recursive manner where it first partitions then sorts the two
 *           partitions. All this should be done in linear time.
 * 
 * We keep two pointers:
 *    1. lastUpdated- index against which last swap was done
 *    2. pivot- last element of the input array
 * 
 * Idea is to sort the array in-place by two steps:
 *    1. Partition
 *       (A) Partition the array in such a way that elements on the left of pivot are 
 *           smaller and right are greater.   
 *       (B) Condition for partition is if the curr element is less than the pivot 
 *           then perform swap b/w curr element and lastUpdated and return lastUpdated
 *    2. When partition is done then again same fn is called with left and right values of 
 *       partitioned arrays.
 */   

const nums = [10, 1, -2, 0, 19, 14];

const swap = (l, r, arr) => {
    let temp;
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
};

function partition(arr, l, h) {
    let pivot = arr[h];
    let lastUpdated = l;
    for (let i = l; i < h; i++) {
        if (arr[i] <= pivot) {
            swap(i, lastUpdated, arr);
            lastUpdated++;
        }
    }
    swap(lastUpdated, h, arr);
    return lastUpdated;
}

/**
 * 
 * @param {Array of Numbers} arr 
 * @param {start_pointer} l 
 * @param {end_pointer} h 
 */
const sort = (arr, l, h) => {
    if (l < h) {
        let p = partition(arr, l, h);
        sort(arr, l, p - 1);
        sort(arr, p + 1, h);
    }
};

sort(nums, 0, nums.length - 1);
// console.log(nums);

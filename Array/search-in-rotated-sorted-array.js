const searchTarget = (arr, l, r) => {
    let left = l;
    let right = r;
    let mid;

    while (left <= right) {
        mid = Math.round((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};
function findMin(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (nums[mid] >= nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
var search = function (nums, target) {
    return nums.indexOf(target);

    const minElIdx = findMin(nums);
    const arr1 = nums.slice(0, minElIdx);
    const arr2 = nums.slice(minElIdx);

    const ans1 = searchTarget(arr1, 0, arr1.length - 1);
    const ans2 = searchTarget(arr2, minElIdx, nums.length - 1);

    console.log(ans1, ans2);
    if (ans1 || ans1 == 0) {
        return ans1;
    } else if (ans2 || ans2 == 0) {
        return ans2;
    } else if (!ans1 && !ans2) {
        return -1;
    }
};

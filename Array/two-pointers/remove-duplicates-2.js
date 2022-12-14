var removeDuplicates = function (nums) {
    if (nums == null || !nums.length) {
        return 0;
    }

    let i = 1,
        j = 1,
        k = 2,
        c = 1;

    while (j < nums.length) {
        if (nums[j] !== nums[j - 1]) {
            c = 1;
            nums[i++] = nums[j];
            j++;
        } else {
            if (c < k) {
                nums[i++] = nums[j];
                c++;
            }
            j++;
        }
    }
    return i;
};

var numOfSubarrays = function (arr, k, threshold) {
    if (arr.length < k) {
        return 0;
    }
    let i = 0,
        j = 0,
        sum = 0,
        count = 0;

    while (j < arr.length) {
        sum += arr[j];

        if (j - i + 1 < k) {
            j++;
        } else {
            if (sum / k >= threshold) {
                count += 1;
            }
            j++;
            sum = sum - arr[i];
            i++;
        }
    }
    return count;
};

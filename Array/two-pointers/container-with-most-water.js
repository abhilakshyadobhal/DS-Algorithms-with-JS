/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height == null || !height.length) {
        return 0;
    }
    let left = 0,
        right = height.length - 1,
        area = 0,
        max = 0;

    while (left !== right) {
        area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(area, max);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

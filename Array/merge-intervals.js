/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * Approach- we first sort the intervals 0th indexes for this approach to work. After sorting we will compare
 *           current(first interval 0th one) interval 1st index with next interval
 *           0th index if curr_int[1]>next_beg[0] then its an overlapping case. we constant (res) having curr_int as initial
 *           value, if an overlapping case comes we will update the 1th index with max of curr_end, next_end.
 *
 * Time-Complexity-  O(N log N)
 * Space-Complexity- O(N)
 */

var merge = function (intervals) {
    if (intervals.length < 0 || intervals.length === 1) {
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let curr_int = intervals[0];
    const res = [curr_int];
    for (let i = 1; i < intervals.length; i++) {
        let curr_end = curr_int[1];
        let next_beg = intervals[i][0];
        let next_end = intervals[i][1];

        if (curr_end >= next_beg) {
            curr_int[1] = Math.max(curr_end, next_end);
        } else {
            curr_int = intervals[i];
            res.push(curr_int);
        }
    }
    return res;
};

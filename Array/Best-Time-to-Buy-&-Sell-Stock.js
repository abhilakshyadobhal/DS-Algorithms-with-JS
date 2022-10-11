/**
 * @param {number[]} prices
 * @return {number}
 * Approach- We'll
 */
var maxProfit = function (prices) {
    let profit = 0;

    let start = 0;
    let end = 1;

    while (end < prices.length) {
        if (prices[start] < prices[end]) {
            let curr = prices[end] - prices[start];

            profit = Math.max(profit, curr);
        } else {
            start = end;
        }

        end++;
    }
    return profit;
};

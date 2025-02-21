/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2)
        return 0

    let max = 0
    let buy = prices[0]
    for(let i = 1; i < prices.length; i++){
        const currentPrice = prices[i]
        const profit = currentPrice - buy
        // console.log(i, currentPrice, buy, profit)
        if(profit > max)
            max = profit
        if(currentPrice < buy)
            buy = currentPrice
    }
    return max
};

// @lc code=end

prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))

// [7,1,5,3,6,4]
// 7 -> [1, 5, 3, 6, 4]
        // 1 - > [5, 3, 6, 4]
        // [5, 3, 6, 4]
// [1, 5, 3, 6, 4]
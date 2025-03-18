/*
 * @lc app=leetcode id=309 lang=typescript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
function maxProfit(prices: number[], index: number = 0, canBuy: boolean = true, memo: { [key: string]: number } = {}): number {
    const key = index + ':' + canBuy
    if (key in memo){
        // console.log("reading ", key, "from memo")
        return memo[key]
    }

    if (index >= prices.length)
        return 0

    // console.log(memo)
    let sellProfit = 0
    let buyProfit = 0

    let holdProfit = maxProfit(prices, index + 1, canBuy, memo)

    if(canBuy){
        buyProfit = maxProfit(prices, index + 1, false, memo) - prices[index]
    }else{
        sellProfit = maxProfit(prices, index + 2, true, memo) + prices[index]
    }

    let max = Math.max(sellProfit, buyProfit, holdProfit)
    memo[key] = max
    return max

};
// @lc code=end

const prices = [2, 1, 4]
console.log(maxProfit(prices))
/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount, memo = {}) {
    if(amount in memo){
        return memo[amount]
    }
    if(amount < 0)
        return -1

    if(amount === 0)
        return 0

    let min = -1

    for(let coin of coins){
        const remained = amount - coin
        const result = coinChange(coins, remained, memo)
        if(result !== -1){
            const changes = 1 + result
            if(min === -1 || changes < min)
                min = changes
        }
    }
    memo[amount] = min
    return min
    
};
// @lc code=end

const coins = [1, 2, 5]
const amount = 11

console.log(coinChange(coins, amount))


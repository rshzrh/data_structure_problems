/*
 * @lc app=leetcode id=518 lang=typescript
 *
 * [518] Coin Change II
 */

// @lc code=start
function change(amount: number, coins: number[], index: number = 0, memo: { [key: number]: number } = {}): number {
    let key = `${index}-|${amount}|`
    // console.log(key)
    if (key in memo)
        return memo[key]
    if(index >= coins.length)
        return 0
    
    if(amount < 0) return 0
    if(amount === 0) return 1

    let result: number = change(amount, coins, index + 1, memo)
    result += change(amount - coins[index], coins, index, memo)

    
    memo[key] = result
    return result
};
// @lc code=end

const amount = 5
const coins = [1, 2, 5]
console.log(change(amount, coins))
/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number, memo: {[key: number]: number} = {}): number {
    // console.log(amount)
    // console.log(memo)
    if(amount in memo)
        return memo[amount]

    if(amount < 0)
        return -1
    if(amount === 0)
        return 0
    
    let result = Infinity
    for(let i = 0; i < coins.length; i++){
        const coin = coins[i]
        const remained = amount - coin
        const numberOfChanges = coinChange(coins, remained, memo)
        if(numberOfChanges >= 0){
            // console.log("found", numberOfChanges)
            result = Math.min(result, 1 + numberOfChanges)
        }
    }
    if(result === Infinity)
        result = -1
    memo[amount] = result
    return result
    
};
// @lc code=end
const coins = [1, 2, 5]
const amount = 100

console.log(coinChange(coins, amount))

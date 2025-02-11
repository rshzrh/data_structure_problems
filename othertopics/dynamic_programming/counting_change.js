/***
 * Write a function, countingChange, that takes in an amount and an array of coins. 
 * The function should return the number of different ways it is possible to make change for the given amount using the coins.
 * You may reuse a coin as many times as necessary.
 * For example,
 * countingChange(4, [1,2,3]) -> 4
 * There are four different ways to make an amount of 
 * 4: 1. 1 + 1 + 1 + 1
 * 2. 1 + 1 + 2
 * 3. 1 + 3
 * 4. 2 + 2
 */

const countingChange = (amount, coins, index = 0, memo = {}) => {
    const key = amount + '-' + index
    if(key in memo)
        return memo[key]
    if(amount === 0)
        return 1
    if(index >= coins.length) return 0

    let total = 0
    
    const coin = coins[index]
    for(let i = 0; (i * coin) <= amount ; i++){
        const remained = amount - (i * coin)
        total += countingChange(remained, coins, index + 1, memo)

    }
    memo[key] = total
    return total
    
};

// console.log(countingChange(4, [1, 2, 3])); // -> 4
// console.log(countingChange(8, [1, 2, 3])); // -> 10
// console.log(countingChange(24, [5, 7, 3])); // -> 5
console.log(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // -> 1525987916


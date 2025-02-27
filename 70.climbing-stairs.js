/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if(n === 1)
        return 1
    if(n === 2)
        return 2
    if(n in memo)
        return memo[n]

    const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    memo[n] = result
    return result
    
};
// @lc code=end

console.log(climbStairs(3))
console.log(climbStairs(5))
console.log(climbStairs(10))
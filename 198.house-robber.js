/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums, index = 0, memo = {}) {
    if(index in memo)
        return memo[index]
    if(index >= nums.length)
        return 0

    const item = nums[index]
    const itemIncluded = item + rob(nums, index + 2, memo)
    const itemExcluded = rob(nums, index + 1, memo)
    const result = Math.max(itemIncluded, itemExcluded)
    memo[index] = result
    return result
    
};
// @lc code=end

const nums = [2,7,9,3,1]
console.log(rob(nums))
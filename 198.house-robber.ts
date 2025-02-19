/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[], index = 0, memo = {}): number {
    if(index in memo)
        return memo[index]

    if(index >= nums.length)
        return 0

    let firstIncluded = nums[index] + rob(nums, index + 2, memo)
    let firstExcluded = rob(nums, index + 1, memo)
    const result = Math.max(firstExcluded, firstIncluded)
    memo[index] = result
    return result
    
};
// @lc code=end

let numbers: number[] = [2,7,9,3,1]
console.log(rob(numbers))
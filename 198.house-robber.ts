/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function robOld(nums: number[], index = 0, memo = {}): number {
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



function rob(nums: number[], index: number = 0, memo: {[key:number]: number} = {}): number {
    if(index in memo)
        return memo[index]

    if(index >= nums.length)
        return 0

    const first = nums[index]
    const firstIncluded = first + rob(nums, index + 2, memo)
    const firstExcluded = rob(nums, index + 1, memo)
    const result =  Math.max(firstIncluded, firstExcluded)
    memo[index] = result
    return result
}
// @lc code=end

let numbers: number[] = [2,7,9,3,1]
console.log(rob(numbers))
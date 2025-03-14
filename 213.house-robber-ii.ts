/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start

function rob(nums: number[]): number {
    if(nums.length === 0)
        return 0
    if(nums.length === 1)
        return nums[0]

    const first = robSimple(nums, 0, nums.length - 2)
    const second = robSimple(nums, 1, nums.length - 1)
    return Math.max(first, second)

}
function robSimple(nums: number[], index: number = 0, upperLimit: number = Infinity, memo: {[key: number]: number} = {}): number {
    if(index in memo)
        return memo[index]

    // console.log(path)
    if(index >= nums.length || index > upperLimit)
        return 0
    
    const first = nums[index]
    let choice = index + 2
    const firstIncluded = first + robSimple(nums, index + 2, upperLimit, memo)
    const firstExcluded = robSimple(nums, index + 1, upperLimit, memo)
    if(firstExcluded > firstIncluded)
        choice = index + 1
    
    const result = Math.max(firstIncluded, firstExcluded)
    // console.log("index:", index, "result", result, "choice", choice)
    memo[index] = result
    return result
};
// @lc code=end

const nums = [2,3,2]
console.log(rob(nums))

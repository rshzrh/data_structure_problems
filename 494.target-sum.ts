/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number, index:number = 0, memo: {[key:string]: number} = {}): number {
    // console.log("index", index, "| target", target) 
    const key = `${target}:(${index})`
    if(key in memo)
        return memo[key]

    if(index === nums.length)
        return target === 0 ? 1 : 0

    const first = nums[index]
    let ways = findTargetSumWays(nums, target - first, index + 1, memo)
    ways += findTargetSumWays(nums, target + first, index + 1, memo)
    memo[key] = ways
    return ways    
};
// @lc code=end

const nums: number[] = [1, 1, 1, 1, 1]
const target = 3

console.log(findTargetSumWays(nums, target))

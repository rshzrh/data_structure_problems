/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {

    if(nums.length === 0)
        return [[]]

    const result: number[][] = []

    const first = nums[0]
    const subs = subsets(nums.slice(1))
    for(let sub of subs){
        result.push([first, ...sub])
        result.push(sub)
    }
    
    return result
};
// @lc code=end
const nums = [1, 2, 3]
console.log(subsets(nums))
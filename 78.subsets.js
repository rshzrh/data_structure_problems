/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    if(nums.length === 0)
        return [[]]
    
    const result = []

    const first = nums[0]
    const rest = nums.slice(1)

    const sets = subsets(rest)
    for(let set of sets){
        result.push([first, ...set])
    }
    result.push(...sets)
    
    return result

    
};
// @lc code=end

const nums = [1, 2, 3]
const result = subsets(nums)
console.log(result)
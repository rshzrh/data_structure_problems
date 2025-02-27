/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    if(target < 0)
        return []

    if(target === 0)
        return [[]]

    const result = []
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i]
        const remained = target - num
        const sums = combinationSum(candidates.slice(i), remained)
        if(sums.length > 0){
            for(let combination of sums){
                result.push([num, ...combination])
            }
        }

    }

    return result
    
};
// @lc code=end

const nums = [2, 3, 5]
const target = 8
const result = combinationSum(nums, target)
console.log(result)


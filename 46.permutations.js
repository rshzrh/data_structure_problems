/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 0)
        return [[]]

    const result = []

    const first = nums[0]
    const rest = nums.slice(1)

    const perms = permute(rest)

    for(let perm of perms){
        for(let i = 0; i < perm.length + 1; i++){
            const newPerm = [...perm.slice(0, i), first, ...perm.slice(i)]
            result.push(newPerm)
        }
    }

    return result

};
// @lc code=end
const nums = [1, 2, 3]
const result = permute(nums)
console.log(result)
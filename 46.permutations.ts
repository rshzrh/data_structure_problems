/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    if(nums.length === 0)
        return [[]]

    const first = nums[0]
    const remained = nums.slice(1)
    const perms = permute(remained)

    const result:  number[][] = []
    for(let perm of perms){
        for(let i = 0; i < perm.length + 1; i++){
            result.push([...perm.slice(0, i), first, ...perm.slice(i)])
        }
    }
    return result

    
};
// @lc code=end

const nums = [1, 2, 3]
console.log(permute(nums))

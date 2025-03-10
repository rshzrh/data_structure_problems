/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    if (target < 0)
        return []
    if (target == 0)
        return [[]]

    const result: number[][] = []
    for(let i = 0; i < candidates.length; i++){

        let num = candidates[i]
        const remained = target - num
        const subs = combinationSum(candidates.slice(i), remained)

        for (let sub of subs) {
            result.push([num, ...sub])
        }

    }
    return result

};
// @lc code=end

const candidates = [2, 3, 6, 7]
const target = 7

console.log(combinationSum(candidates, target))

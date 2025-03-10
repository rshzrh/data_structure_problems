/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start

//TODO: incorrect solution
function combinationSum2(numbers: number[], target: number): number[][] {
    

    function find(candidates: number[], target: number, index: number = 0): number[][] {
        console.log("start from index", index)
        if (target < 0)
            return []
        if (target === 0)
            return [[]]

        const result: number[][] = []
        for (let i = index; i < candidates.length; i++) {
            let num = candidates[i]
            let remained = target - num
            if(i - 1 >= 0 && candidates[i] === candidates[i - 1]) continue
            const subs = find(candidates, remained, i + 1)
            for (let sub of subs) {
                result.push([num, ...sub])
            }
        }
        return result
    }    
    const nums = numbers.sort((a, b) => (a - b))
    console.log(nums)
    return find(nums, target)

};
// @lc code=end

const candidates = [10, 1, 2, 7, 6, 1, 5]
const target = 8
console.log(combinationSum2(candidates, target))
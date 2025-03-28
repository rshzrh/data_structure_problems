/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {

    const result: number[][] = []

    const sorted = nums.sort((a, b) => a - b)
    // console.log(sorted)
    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1])
            continue

        let left = i + 1
        let right = sorted.length - 1
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right]
            // console.log(sorted[i], "->", sum)
            if (sum === 0) {
                result.push([sorted[i], sorted[left], sorted[right]])
                while (sorted[left] === sorted[left + 1]) left++
                while (sorted[right] === sorted[right - 1]) right--
                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }

        }

    }

    return result

};
// @lc code=end

const nums = [-1, 0, 1, 2, -1, -4]
const result = threeSum(nums)
console.log(result)
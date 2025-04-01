/*
 * @lc app=leetcode id=2461 lang=typescript
 *
 * [2461] Maximum Sum of Distinct Subarrays With Length K
 */

// @lc code=start
function maximumSubarraySum(nums: number[], k: number): number {

    let left = 0
    let max = 0

    let windowSum = 0
    let windowNumbers = new Set<number>()

    for(let right = 0; right < nums.length; right++){
        // console.log(left, "->", right)
        const current = nums[right]
        windowSum += current
        while(windowNumbers.has(current) || (right - left + 1) > k){
            windowNumbers.delete(nums[left])
            windowSum -= nums[left]
            left++
        }
        windowNumbers.add(current)
        if((right - left + 1) === k){
            // console.log(left, "->", right, " | ", windowNumbers)
            max = Math.max(max, windowSum)
        }
    }

    return max
    
};
// @lc code=end

const nums = [4, 4, 4]
const k = 3
console.log(maximumSubarraySum(nums, k))
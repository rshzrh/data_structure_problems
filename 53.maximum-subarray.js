/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArrayWithElements = function(nums) {
    if (nums.length === 0) return [];

    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    let start = 0, end = 0;
    let tempStart = 0;  // Temporary start index for the current subarray

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxCurrent + nums[i]) {
            // Start a new subarray at the current element
            maxCurrent = nums[i];
            tempStart = i;
        } else {
            // Continue the existing subarray
            maxCurrent = maxCurrent + nums[i];
        }

        // Update the global maximum and the indices if the current subarray is better
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = tempStart;
            end = i;
        }
    }

    // Return the subarray from start to end (inclusive)
    return nums.slice(start, end + 1);
};
var maxSubArray = function(nums) {
    if(nums.length === 0)
        return 0

    let maxCurrent = nums[0]
    let max = nums[0]

    for(let i = 1; i < nums.length; i++){
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
        if(maxCurrent > max)
            max = maxCurrent
    }
    return max
};
// @lc code=end

const nums = [5,4,-1,7,8]
console.log(maxSubArrayWithElements(nums))
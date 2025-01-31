/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if(nums.length === 0)
        return 0

    let uniqueIndex = 0
    
    for(let pointerIndex = uniqueIndex + 1; pointerIndex < nums.length; pointerIndex++){
        if(nums[pointerIndex] === nums[uniqueIndex])
            continue
        uniqueIndex++
        nums[uniqueIndex] = nums[pointerIndex]
    }
    return uniqueIndex + 1
};

// @lc code=end


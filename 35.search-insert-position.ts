/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    if(nums === null || nums.length === 0)
        return 0
    let left = 0
    let right = nums.length - 1
    
    if(target < nums[0])
        return 0
    if(target > nums[nums.length - 1])
        return nums.length
    
    let middle = - 1
    while(left <= right){
        
        
        middle = Math.floor((left + right) / 2)
       
        if(nums[middle] === target)
            return middle
        if(nums[middle] < target)
            left = middle + 1
        else
            right = middle - 1
        
    }
    return left
};

// @lc code=end


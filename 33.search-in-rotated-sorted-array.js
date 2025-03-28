/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    if(nums.length === 0)
        return -1

    let left = 0
    let right = nums.length - 1

    while(left <= right){

        const mid = Math.floor((left + right) / 2)
        const current = nums[mid]

        if(current === target)
            return mid

        if(nums[left] <= nums[mid]){ 
            if(target >= nums[left] && target <= nums[mid])
                right = mid - 1
            else
                left = mid + 1

        }else{
            if(target >= nums[mid] && target <= nums[right])
                left = mid + 1
            else
                right = mid - 1
        }
    }
    
    return -1
    
};
// @lc code=end

const nums = [3, 1]
const target = 1
console.log(search(nums, target))

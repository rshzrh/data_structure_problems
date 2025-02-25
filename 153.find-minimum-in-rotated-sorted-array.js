/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let min = nums[0]

    let left = 0
    let right = nums.length - 1

    while(left < right){

        const midIndex = Math.floor((left + right) / 2)
        const mid = nums[midIndex]
        // console.log(left, mid, right)

        const low = nums[left]
        const high = nums[right]

        if(low < min)
            min = low

        if(mid > high){
            left = midIndex + 1
        }else{
            right = midIndex
        }
    }
    
    return nums[left]
    
};
// @lc code=end

const nums = [2, 1]
console.log(findMin(nums))
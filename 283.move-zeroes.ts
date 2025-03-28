/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    
    let left = 0
    for(let right = 0; right < nums.length; right++){
        if(nums[right] !== 0){
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
    
};
// @lc code=end
let numbers  = [0,1,0,3,12]
moveZeroes(numbers)
console.log(numbers)

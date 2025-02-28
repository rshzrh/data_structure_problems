/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelfOld = function(nums) {

    const result = new Array(nums.length).fill(1)

    let left = 1
    let right = 1

    for(let i = 0; i < nums.length; i++){
        result[i] *= left
        left *= nums[i]
    }

    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= right
        right *= nums[i]
    }

    return result
    
    
};














var productExceptSelf = function(nums) {

    let left = 1
    let right = 1

    const products = new Array(nums.length).fill(1)

    for(let i = 0; i < nums.length; i++){
        products[i] *= left
        left *= nums[i]
    }

    for(let i = nums.length - 1; i >= 0; i--){
        products[i] *= right
        right *= nums[i]
    }
    
    return products

}


// @lc code=end


let nums = [1,2,3,4]
console.log(productExceptSelf(nums))

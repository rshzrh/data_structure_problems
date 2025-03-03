/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let left = 0
    let right = height.length - 1

    let leftmax = height[left]
    let rightmax = height[right]

    let result = 0
    while(left < right){
        if(leftmax < rightmax){
            left++
            leftmax = Math.max(leftmax, height[left])
            result += leftmax - height[left]
        }else{
            right--
            rightmax = Math.max(rightmax, height[right])
            result += rightmax - height[right]
        }
    }

    return result

    
};
// @lc code=end

const height = [4,2,0,3,2,5]
console.log(trap(height))


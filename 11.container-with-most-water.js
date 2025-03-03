/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaN2 = function(height) {

    let max = 0
    for(let i = 0; i < height.length; i++){
        for(let j = i; j < height.length; j++){
            const area = (j - i) * Math.min(height[i], height[j])
            if(area > max){
                // console.log("local maximum found at", i, ":", height[i], " | ",  j, ":", height[j], "->", area)
                max = area
            }
        }
    }
    return max
};

var maxArea = function(height) {

    let left = 0
    let right = height.length - 1

    let max = 0
    while(left <= right){
        const area = (right - left) * Math.min(height[left], height[right])
        // console.log(left, ":", height[left], " | ", right, ":", height[right], "->", area)
        if(area > max)
            max = area

        if(height[left] <= height[right])
            left++
        else
            right--

    }
    return max

}
// @lc code=end
const height = [1,8,20,2,5,20,8,3,7]
console.log(maxArea(height))

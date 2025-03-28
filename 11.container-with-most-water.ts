/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let max:number = 0

    let left = 0
    let right = height.length - 1
    while(left < right){
        let lheight = height[left]
        let rheight = height[right]
        let area = (right - left) * Math.min(lheight, rheight)
        // console.log(left, "->", right, ":", area)
        if(area > max)
            max = area
        if(lheight >= rheight)
            right--
        else
            left++
    }

    return max
    
};
// @lc code=end

const height = [1, 1]
console.log(maxArea(height))

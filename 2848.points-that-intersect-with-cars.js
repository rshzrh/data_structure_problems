/*
 * @lc app=leetcode id=2848 lang=javascript
 *
 * [2848] Points That Intersect With Cars
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    if(nums.length === 0)
        return 0

    const sorted = nums.sort((a, b) => {
        const first = a[0]
        const second = b[0]
        if(first < second)
            return -1
        if(first > second) 
            return 1

        return 0
    })

    const stack = [sorted[0]]
    for(let i = 0; i < sorted.length; i++){
        const current = sorted[i]
        const top = stack[stack.length - 1]

        if(current[0] >= top[0] && current[0] <= top[1]){
            stack.pop()
            stack.push([top[0], Math.max(top[1], current[1])])
        }else{
            stack.push(current)
        }
    }
    let points = 0
    for(let [start, end] of stack){
        // console.log(start, end)
        points += (end - start) + 1
    }
    return points
    
};
// @lc code=end

const nums = [[1,3],[5,8]]
console.log(numberOfPoints(nums))


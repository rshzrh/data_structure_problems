/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1)
        return intervals

    const sorted = intervals.sort((a, b) => {
        const first = a[0]
        const second = b[0]
        if(first < second)
            return -1
        if(first > second)
            return 1
        return 0
    })
    
    
    
    const stack = [sorted[0]]
    for(let i = 1; i < sorted.length; i++){
        const current = sorted[i]
        let top = stack[stack.length - 1]
        if((current[0] >= top[0] && current[0] <= top[1])){
            stack.pop()
            stack.push([top[0], Math.max(current[1], top[1])])
        }else{
            stack.push(current)
        }
    }
    
    return stack
    
};
// @lc code=end

const intervals = [[1,4],[2,3]]
console.log(merge(intervals))
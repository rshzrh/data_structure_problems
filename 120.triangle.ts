/*
 * @lc app=leetcode id=120 lang=typescript
 *
 * [120] Triangle
 */

// @lc code=start
function minimumTotal(triangle: number[][], row: number = 0, col: number = 0, memo: {[key: string]: number} = {}): number {
    const key = row + '-' + col
    if(key in memo){
        // console.log("read", key, " from memo")
        return memo[key]
    }
    // console.log("row:", row, "col:", col)
    if(row >= triangle.length)
        return Infinity
    if(col >= triangle[row].length)
        return Infinity
    let value = triangle[row][col]
    const first = minimumTotal(triangle, row + 1, col, memo)
    const second = minimumTotal(triangle, row + 1, col + 1, memo)
    const nextMin = Math.min(first, second)
    if(nextMin !== Infinity)
        value += nextMin
    memo[key] = value
    // console.log(memo)
    return value
};
// @lc code=end

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log(minimumTotal(triangle))
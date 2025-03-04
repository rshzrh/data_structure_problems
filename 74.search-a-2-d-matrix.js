/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    const rows = matrix.length
    const cols = matrix[0].length

    let left = 0
    let right = rows * cols - 1

    while(left <= right){

        let mid = Math.floor((left + right) / 2)

        let row = Math.floor(mid / cols)
        let col = mid - row * cols
        // console.log("mid: ", mid, "(", row, ",", col, ")")
        if(matrix[row][col] === target)
            return true
        if(matrix[row][col] < target)
            left = mid + 1
        else
            right = mid - 1
    }

    return false

    
};

matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 13
console.log(searchMatrix(matrix, target))
// @lc code=end


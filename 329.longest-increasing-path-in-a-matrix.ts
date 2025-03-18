/*
 * @lc app=leetcode id=329 lang=typescript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
function longestIncreasingPath(matrix: number[][]): number {

    const rows = matrix.length
    const cols = matrix[0].length
    let max: number = 1

    const map: {[key: string]: number} = {}
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let length = explore(matrix, i, j, map)
            if(length > max)
                max = length
        }
    }
    return max
    
};

function cellKey(row: number, col: number): string{
    return row + '-' + col
}

function isInbound(matrix: number[][], row: number, col: number){
    const rows = matrix.length
    const cols = matrix[0].length
    return (row >= 0 && row < rows) && (col >= 0 && col < cols)
}

function explore(matrix: number[][], row: number, col: number, visited: {[key: string]: number}){
    const key = cellKey(row, col)
    if(!isInbound(matrix, row, col))
        return 0
    if(key in visited)
        return visited[key]
    
    
    
    let len = 1
    const lengths: number[] = []

    const value = matrix[row][col]

    if(isInbound(matrix, row - 1, col) && matrix[row - 1][col] > value)
        lengths.push(explore(matrix, row - 1, col, visited))
    if(isInbound(matrix, row + 1, col) && matrix[row + 1][col] > value)
        lengths.push(explore(matrix, row + 1, col, visited))
    if(isInbound(matrix, row, col - 1) && matrix[row][col - 1] > value)
        lengths.push(explore(matrix, row , col - 1, visited))
    if(isInbound(matrix, row, col + 1) && matrix[row][col + 1] > value)
        lengths.push(explore(matrix, row , col + 1, visited))

    // console.log(`(${row}, ${col}) -> `, lengths)
    if(lengths.length > 0)
        len += Math.max(...lengths)
    visited[key] = len
    return len
}
// @lc code=end

const matrix: number[][] = [[3,4,5],[3,2,6],[2,2,1]]
// console.table(matrix)
console.log(longestIncreasingPath(matrix))
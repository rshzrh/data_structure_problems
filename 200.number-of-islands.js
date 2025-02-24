/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    const rows = grid.length
    const cols = grid[0].length
    
    const visited = new Set()
    let islandCounter = 0
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === '0')
                continue
            if(visited.has(cellKey(i, j)))
                continue
            // console.log('start at', i, j)
            explore(grid, i, j, visited)
            islandCounter++
        }
    }
    return islandCounter
};

function explore(grid, i, j, visited){
    
    const queue = [[i, j]]
    while(queue.length > 0){
        const [row, col] = queue.shift()
        let key = cellKey(row, col)
        if(visited.has(key))
            continue
        visited.add(key)
        if(isInbound(row + 1, col, grid))
            if(grid[row + 1][col] === '1')
                queue.push([row + 1, col])
        if(isInbound(row, col + 1, grid))
            if(grid[row][col + 1] === '1')
                queue.push([row, col + 1])
        if(isInbound(row - 1, col, grid))
            if(grid[row - 1][col] === '1')
                queue.push([row - 1, col])
        if(isInbound(row, col - 1, grid))
            if(grid[row][col - 1] === '1')
                queue.push([row, col - 1])
        

    }

}

function isInbound(row, col, grid){
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
}

function cellKey(row, col){
    return row + '-' + col
}
// @lc code=end

const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
console.log(numIslands(grid))
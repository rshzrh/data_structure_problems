/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {

    const rows = grid.length
    const cols = grid[0].length

    const visited: Set<string> = new Set<string>()

    let islandCounter = 0

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const key = cellKey(i, j)
            if(grid[i][j] === '1' && !visited.has(key)){
                explore(grid, i, j, visited)
                islandCounter++
            }
        }
    }
    return islandCounter
    
};

function cellKey(row: number, col: number): string {
    return `${row}-${col}`
}
function explore(grid: string[][], row: number, col: number, visited: Set<string>): void{

    const rows = grid.length
    const cols = grid[0].length

    console.log("row:", row, "col:", col, visited)
    function isInbound(arow: number, acol: number){
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }

    if(!isInbound(row, col) || grid[row][col] === '0')
        return
    const key = cellKey(row, col)
    if(visited.has(key))
        return

    visited.add(key)

    explore(grid, row - 1, col, visited)
    explore(grid, row + 1, col, visited)
    explore(grid, row, col - 1, visited)
    explore(grid, row, col + 1, visited)
}
// @lc code=end

const grid: string[][] = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

console.groupCollapsed(numIslands(grid))
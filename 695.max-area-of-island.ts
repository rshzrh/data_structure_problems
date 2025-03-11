/*
 * @lc app=leetcode id=695 lang=typescript
 *
 * [695] Max Area of Island
 */

// @lc code=start

function cellKey(row: number, col: number): string {
    return `${row}-${col}`
}
function maxAreaOfIsland(grid: number[][]): number {
    
    const rows = grid.length
    const cols = grid[0].length

    const visited: Set<string> = new Set<string>()
    let max = 0

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 1){
                const key = cellKey(i, j)
                if(!visited.has(key)){
                    const area: number = exploreIsland(grid, i, j, visited)
                    // console.log("new island with area", area)
                    if(area > max)
                        max = area
                }
            }
        }
    }
    return max
};

function exploreIsland(grid: number[][], row: number, col: number, visited:Set<string>): number{
    const rows = grid.length
    const cols = grid[0].length

    function isInbound(arow: number, acol: number): boolean {
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }

    const key = cellKey(row, col)

    if(!isInbound(row, col) || visited.has(key) || grid[row][col] === 0)
        return 0

    visited.add(key)

    return 1 + exploreIsland(grid, row - 1, col, visited) + exploreIsland(grid, row + 1, col, visited) +
    exploreIsland(grid, row, col - 1, visited) + exploreIsland(grid, row, col + 1, visited)
    

}
// @lc code=end

const board: number[][] = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]
console.log(maxAreaOfIsland(board))
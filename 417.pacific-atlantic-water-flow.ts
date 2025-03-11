/*
 * @lc app=leetcode id=417 lang=typescript
 *
 * [417] Pacific Atlantic Water Flow
 */

// @lc code=start
function pacificAtlantic(heights: number[][]): number[][] {

    const rows = heights.length
    const cols = heights[0].length

    const pacific:Set<string> = new Set<string>()
    const atlantic:Set<string> = new Set<string>()

    for(let row = 0; row < rows; row++){
        explore(heights, row, 0, pacific)
        explore(heights, row, cols - 1, atlantic)
    }

    for(let col = 0; col < cols; col++){
        explore(heights, 0, col, pacific)
        explore(heights, rows - 1, col, atlantic)
    }

    // console.log(pacific)
    // console.log(atlantic)
    const result: number[][] = []

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            const key = cellKey(i, j)
            if(pacific.has(key) && atlantic.has(key)){
                result.push([i, j])
            }
        }
    }

    return result
    
};

function cellKey(row: number, col: number): string{
    return `${row}-${col}`
}
function explore(heights: number[][], row: number, col: number, ocean: Set<string>){

    const rows = heights.length
    const cols = heights[0].length

    // console.log("processing", row, col)

    function isInbound(arow: number, acol: number){
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }
    
    const key = cellKey(row, col)

    if(ocean.has(key))
        return

    ocean.add(key)
    
    if(isInbound(row - 1, col) && heights[row - 1][col] >= heights[row][col]){
        
        explore(heights, row - 1, col, ocean)
    }

    if(isInbound(row + 1, col) && heights[row + 1][col] >= heights[row][col]){
        
        explore(heights, row + 1, col, ocean)
    }

    if(isInbound(row, col - 1) && heights[row][col - 1] >= heights[row][col]){
        
        explore(heights, row, col - 1, ocean)
    }
    // console.log(row, col + 1, isInbound(row, col + 1), heights[row][col + 1])
    if(isInbound(row, col + 1) && heights[row][col + 1] >= heights[row][col]){
        
        
        explore(heights, row, col + 1, ocean)
    }

    

}
// @lc code=end

const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
console.log(pacificAtlantic(heights))
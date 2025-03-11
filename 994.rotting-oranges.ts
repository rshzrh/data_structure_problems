/*
 * @lc app=leetcode id=994 lang=typescript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {

    const rows = grid.length
    const cols = grid[0].length

    const times:Map<string, number> = new Map<string, number>()
    const freshOranges:number[][] = []

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 2){
                startRotting(grid, i, j, 0, times)
                
            }else if(grid[i][j] === 1){
                freshOranges.push([i, j])
            }
        }
    }
    // console.log(times)
    let time: number = 0
    for(let [row, col] of freshOranges){

        const key = cellKey(row, col)
        if(!times.has(key))
            return -1
        const t = times.get(key) || -1
        if(t > time)
            time = t
    }
    return time
    
};

function cellKey(row: number, col: number): string{
    return `${row}-${col}`
}

function startRotting(grid: number[][], row: number, col: number, minute: number, times:Map<string, number>){

    const rows = grid.length
    const cols = grid[0].length

    function isInbound(arow: number, acol: number):boolean{
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }

    if(!isInbound(row, col) || grid[row][col] === 0)
        return
    
    const key = cellKey(row, col)
    if(times.has(key) && times.get(key) < minute)
        return


    times.set(key, minute)
    startRotting(grid, row + 1, col, minute + 1, times)
    startRotting(grid, row - 1, col, minute + 1, times)
    startRotting(grid, row, col - 1, minute + 1, times)
    startRotting(grid, row, col + 1, minute + 1, times)
}



// @lc code=end
const grid = [
    [0, 2]
]
console.log(orangesRotting(grid))

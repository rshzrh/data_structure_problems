/*
 * @lc app=leetcode id=130 lang=typescript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {

    const rows = board.length
    const cols = board[0].length

    const visited:Set<string> = new Set<string>()

    for(let i = 0; i < rows; i++){
        explore(board, i, 0, visited)
        explore(board, i, cols - 1, visited)
    }

    for(let j = 0; j < cols; j++){
        explore(board, 0, j, visited)
        explore(board, rows - 1, j, visited)
    }
    // console.log(board)
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === "O")
                board[i][j] = "X"
            else if(board[i][j] === "*")
                board[i][j] = "O"
            
        }
    }
    // console.log(board)
    
};

function cellKey(row:number, col:number){
    return `${row}-${col}`
}

function explore(board: string[][], row:number, col:number, visited: Set<string>){
    const rows = board.length
    const cols = board[0].length

    function isInline(arow: number, acol: number):boolean{
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }

    const key = cellKey(row, col)
    if(visited.has(key))
        return
    if(!isInline(row, col) || board[row][col] !== 'O')
        return

    visited.add(key)
    board[row][col] = '*'

    explore(board, row + 1, col, visited)
    explore(board, row - 1, col, visited)
    explore(board, row, col + 1, visited)
    explore(board, row, col - 1, visited)

}
// @lc code=end


const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
solve(board)

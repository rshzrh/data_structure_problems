/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {

    let rows = board.length
    let cols = board[0].length

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === word[0]){
                if(explore(board, i, j, word))
                    return true
            }
        }
    }
    return false
};

function explore(board: string[][], row:number, col:number, word: string):boolean{
    
    if(word.length === 0)
        return true
    const rows = board.length
    const cols = board[0].length
    if(row < 0 || row >= rows) return false
    if(col < 0 || col >= cols) return false

    if(board[row][col] !== word[0])
        return false

    const first = word[0]
    const remained = word.slice(1)
    board[row][col] = '*'
    // console.log(board)
    const result = explore(board, row - 1, col, remained) || 
                    explore(board, row + 1, col, remained) ||
                    explore(board, row, col + 1, remained) ||
                    explore(board, row, col - 1, remained)

    board[row][col] = first
    return result
}
// @lc code=end

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCB"
console.log(exist(board, word))
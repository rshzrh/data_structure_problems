/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    if(word.length === 0)
        return true

    const rows = board.length
    const cols = board[0].length

    const first = word[0]

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === first){
                if(explore(board, word, i, j))
                    return true
            }
        }
    }
    return false
};

function explore(board, word, row, col){
    if(word.length === 0)
        return true
    const rows = board.length
    const cols = board[0].length
    if(row < 0 || row >= rows) return false
    if(col < 0 || col >= cols) return false
    if(board[row][col] === '*') return false
    if(board[row][col] !== word[0]) return false

    const current = board[row][col]
    board[row][col] = '*'
    // console.table(board)
    const remained = word.slice(1)
    const result = explore(board, remained, row + 1, col) || 
        explore(board, remained, row - 1, col) || 
        explore(board, remained, row, col - 1) || 
        explore(board, remained, row, col + 1)
    board[row][col] = current
    return result
    
}

// @lc code=end

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
const word = "ABCB"
console.table(board)
const result = exist(board, word)
console.log(result) 
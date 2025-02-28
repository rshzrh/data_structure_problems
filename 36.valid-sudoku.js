/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

    const rows = board.length
    const cols = board[0].length


    for(let i = 0; i < rows; i++){
        //check row: board[i][.]
        
        const map = new Set()
        for(let j = 0; j < cols; j++){
            if(board[i][j] === '.')
                continue
            if(map.has(board[i][j]))
                return false
            map.add(board[i][j])
        }
        map.clear()
    }

    //check column: board[.][j]
    for(let j = 0; j < cols; j++){
        const map = new Set()
        for(let i = 0; i < rows; i++){
            if(board[i][j] === '.')
                continue
            if(map.has(board[i][j]))
                return false
            map.add(board[i][j])
        }
        map.clear()
    }


    for(let row = 0; row < rows; row += 3){
        for(let col = 0; col< cols; col += 3){
            // console.log("processing box:", row, col)
            const map = new Set()
            for(let i = row; i < row + 3; i++){
                for(let j = col; j < col + 3; j++){
                    if(board[i][j] === '.')
                        continue
                    if(map.has(board[i][j]))
                        return false
                    map.add(board[i][j])
                }
            }

        }
    }

    return true
    
};

const board = 
[["9","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

// console.log(isValidSudoku(board))

// @lc code=end


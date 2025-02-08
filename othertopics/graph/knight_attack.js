/***
 * A knight and a pawn are on a chess board. 
 * Can you figure out the minimum number of moves required for the knight to travel to the same position of the pawn? 
 * On a single move, the knight can move in an "L" shape; two spaces in any direction, then one space in a perpendicular direction. 
 * This means that on a single move, a knight has eight possible positions it can move to.
 * Write a function, knightAttack, that takes in 5 arguments:
 * n, kr, kc, pr, pc
 * n = the length of the chess board
 * kr = the starting row of the knight
 * kc = the starting column of the knight
 * pr = the row of the pawn
 * pc = the column of the pawn
 * The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. 
 * The knight cannot move out-of-bounds of the board. 
 * You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. 
 * If it is not possible for the knight to attack the pawn, then return null.
 */

const knightAttack = (n, kr, kc, pr, pc) => {
    const grid = []
    for(let i = 0; i < n; i++){
        grid.push(new Array(n).fill(0))
    }

    let distance = explore(kr, kc, pr, pc, grid)
    grid[kr][kc] = '*'
    grid[pr][pc] += '#'
    // console.table(grid)

    return distance
};

function explore(kr, kc, pr, pc, grid){
    if(kr == pr && kc === pc) {
        console.log("found on: ", kr, kc)
        return grid[kr][pr]
    } 

    const deltas = []

    for(let i of [-1, 1]){
        for(let j of [-2, 2]){
            deltas.push([i, j])
            deltas.push([j, i])
        }
    }


    const queue = []
    for(let [rx, cx] of deltas){
        
        if(isInbound(kr + rx, kc + cx, grid)){
            
            queue.push([kr + rx, kc + cx, 0])
        }
    }

    while(queue.length > 0){
        const [row, col, distance] = queue.shift()
        console.log("dequeued: " + row, col, distance)
        
            

        if(grid[row][col] != 0)
            continue

        grid[row][col] = distance + 1

        if(row === pr && col === pc){
            console.log("found on:", row, col, grid[row][col])
            return grid[row][col]
        }
        
        
        for(let [rx, cx] of deltas){
            
            if(isInbound(row + rx, col + cx, grid)){
                queue.push([row + rx, col + cx, distance + 1])
            }
        }
    }
    return null
}

function isInbound(i, j, grid){
    return (i >= 0 && i < grid.length) && (j >= 0 && j < grid[0].length)
}

const result =knightAttack(100, 21, 10, 0, 0); // -> 11










console.log(result)





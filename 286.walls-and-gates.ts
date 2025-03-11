/**
 * You are given a 
m
×
n
m×n 2D grid initialized with these three possible values:

-1 - A water cell that can not be traversed.
0 - A treasure chest.
INF - A land cell that can be traversed. We use the integer 2^31 - 1 = 2147483647 to represent INF.
Fill each land cell with the distance to its nearest treasure chest. If a land cell cannot reach a treasure chest than the value should remain INF.

Assume the grid can only be traversed up, down, left, or right.

Modify the grid in-place.

Input: [
  [2147483647,-1,0,2147483647],
  [2147483647,2147483647,2147483647,-1],
  [2147483647,-1,2147483647,-1],
  [0,-1,2147483647,2147483647]
]

Output: [
  [3,-1,0,1],
  [2,2,1,-1],
  [1,-1,2,-1],
  [0,-1,3,4]
]

 */

const MAX_NUMBER = 2147483647
function findShortestPath(grid: number[][]): void{
    const rows = grid.length
    const cols = grid[0].length


    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){

            if(grid[i][j] === 0){ //chest found
                const visited:Set<string> = new Set<string>()
                markDistances(grid, i, j, 0, visited)
            }
        }
    }

}

function cellKey(row:number, col:number): string{
    return `${row}-${col}`
}

function markDistances(grid: number[][], row: number, col: number, distance: number, visited: Set<string>){

    const rows = grid.length
    const cols = grid[0].length

    function isInbound(arow: number, acol: number){
        return (arow >= 0 && arow < rows) && (acol >= 0 && acol < cols)
    }

    const key = cellKey(row, col)
    if(visited.has(key))
        return

    if(!isInbound(row, col) || grid[row][col] === -1)
        return

    if(grid[row][col] > distance)
        grid[row][col] = distance
    
    visited.add(key)
    
    markDistances(grid, row + 1, col, distance + 1, visited)
    markDistances(grid, row - 1, col, distance + 1, visited)
    markDistances(grid, row, col + 1, distance + 1, visited)
    markDistances(grid, row, col - 1, distance + 1, visited)
    console.log(grid)
}

let grid = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
  ]
console.log(findShortestPath(grid))
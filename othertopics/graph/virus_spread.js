/**
 * Oh no! There is a computer virus going around in our data center. The virus spreads to adjacent computers.

Write a function, virusSpread, that takes in a grid. In the grid, 0's are empty spaces, 1's are clean computers, and 2's are infected computers. Every hour, the virus spreads from infected computers to immediately adjacent clean computers. The virus can only spread to adjacent computers that are up, down, left, or right.

The function should return the number of hours it will take for all computers to be infected. If it is impossible for all computers to become infected, then return -1.
 */
const virusSpread = (grid) => {
    const rows = grid.length
    const cols = grid[0].length
    const infectionHours = {}
    let cleanComputers = 0
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        if(grid[i][j] === 0)
          cleanComputers++
        if(grid[i][j] === 2){
          infectOthers(grid, i, j, 0, infectionHours)
        }
      }
    }
    let hours = 0
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
        if(grid[i][j] === 1){
          const key = cellKey(i, j)
          if(!(key in infectionHours))
            return -1
          hours = Math.max(hours, infectionHours[key])
        }
      }
    }
    return hours
  };
  
  function cellKey(row, col){
    return row + '-' + col
  }
  
  function infectOthers(grid, row, col, hour, infectionHours){
    const key = cellKey(row, col)
    // console.log(hour, ":", key, "->", infectionHours)
    const rows = grid.length
    const cols = grid[0].length
  
    if(row < 0 || row >= rows) return
    if(col < 0 || col >= cols) return
    if(grid[row][col] === 0) return
    
    
  
    
    
    if(
       (key in infectionHours) && 
       infectionHours[key] <= hour)
        return
  
    if(grid[row][col] === 1){
      infectionHours[key] = hour
    }else if(grid[row][col] === 2){
      hour = 0
      infectionHours[key] = 0
    }
    const currentHour = hour + 1
    
    infectOthers(grid, row + 1, col, currentHour, infectionHours)
    infectOthers(grid, row - 1, col, currentHour, infectionHours)
    infectOthers(grid, row, col + 1, currentHour, infectionHours)
    infectOthers(grid, row, col - 1, currentHour, infectionHours)
    
  }
  module.exports = {
    virusSpread,
  };
  
  const grid = [
    [0,0,0,0,1,1,2],
    [0,1,1,1,1,1,0],
    [0,2,0,0,0,0,0]
  ];
  const hours = virusSpread(grid); // -> 4
  console.log(hours)
  
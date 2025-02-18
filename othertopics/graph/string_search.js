/**
 * Write a function, stringSearch, that takes in a grid of letters and a string as arguments. The function should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. The path can begin at any position, but you cannot reuse a position more than once in the path.

You can assume that all letters are lowercase and alphabetic.
 */

const stringSearch = (grid, s) => {

    for(let i = 0; i < grid.length; i++){
      
      for(let j = 0; j < grid[0].length; j++){
        console.log(i, j)
        if(explore(grid, s, i, j))
          return true
      }
    }
    return false
  };
  
  function explore(grid, s, row, col){
  
  
    if(row >= grid.length || row < 0 || col >= grid[0].length || col < 0)
      return false
  
    
    if(s.length === 1)
      return grid[row][col] === s[0]
  
  
    const current = grid[row][col]
    if(current !== s[0])
      return false
  
    grid[row][col] = '*'
    const target = s.slice(1)
    const result =  explore(grid, target, row + 1, col) 
            || explore(grid, target, row - 1, col)
            || explore(grid, target, row, col + 1)
            || explore(grid, target, row, col - 1)
    grid[row][col] = current
    return result
  }
  
  module.exports = {
    stringSearch,
  };
  
  
  const grid = [
    ['e', 'y', 'h', 'i', 'j'],
    ['q', 'x', 'e', 'r', 'p'],
    ['r', 'o', 'l', 'l', 'n'],
    ['p', 'r', 'x', 'o', 'h'],
    ['a', 'a', 'm', 'c', 'm']
  ];
  const result = stringSearch(grid, 'hello'); // -> true
  console.log(result)
  
/***
 * You've been hired to plant flowers in a garden with n different positions. 
 * There are m different flower types. 
 * The prices of flowers types vary depending on which position they are planted. 
 * Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. 
 * What is the minimum cost we need to plant a flower in each position of the garden?

Write a function, positioningPlants, that takes in a 2D array with dimensions n * m. 
Each row of the array represents the costs of the flower types at that position. 
This means that costs[i][j] represents the cost of planting flower type j at position i. For example:

Given these costs,

costs = [
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3]
]

The costs of plants at position 1 are $6, $1, and $9.
The cost of planting flower type 0 at position 1 is $6.
The cost of planting flower type 2 at position 1 is $9.

The function should return the minimum cost of planting flowers without placing the same flower type in adjacent positions.
 */

const positioningPlants = (costs, position = 0, prevType = -1, memo = {}) => {
    const key = position + ':' + prevType
    if(key in memo)
      return memo[key]
    const positionCosts = costs[position]
    let min = Infinity
  
    if(position >= costs.length) return 0
    
      
    for(let type = 0; type < positionCosts.length; type++){
      if(type === prevType)
        continue
      
      const cost = positionCosts[type]
      // console.log("position", position, "prevType", prevType, "type", type, "cost", cost)
      const result = cost + positioningPlants(costs, position + 1, type, memo)
      if(result < min){
        min = result
      }
        
    }
    memo[key] = min
    return min
  };

positioningPlants([
    [4, 3, 7],
    [6, 1, 9],
    [2, 5, 3]
  ]); // -> 7, by doing 4 + 1 + 2.
  
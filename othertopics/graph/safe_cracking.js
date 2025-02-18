/***
 * Oh-no! You forgot the number combination that unlocks your safe. 
 * Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. 
 * Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. 
The function should return a string representing the combination.
 */

const safeCracking = (hints) => {
    const numParents = {}
    const graph = {}
    
    for(let [parent, child] of hints){
      numParents[parent] = 0
      numParents[child] = 0
      graph[parent] = []
    }
    
    for(let [parent, child] of hints){
      if(child in numParents){
        numParents[child] += 1
        graph[parent].push(child)
      }
    }
  
    console.log(numParents)
    console.log(graph)
  
    const result = []
    const stack = []
  
    for(let node in numParents){
      if(numParents[node] === 0){
        stack.push(node)
      }
    }
  
    while(stack.length > 0){
      const current = stack.pop()
      // console.log("current", current)
      // console.log("graph[current]", graph[current])
      if(numParents[current] === 0)
        result.push(current)
      if(current in graph)
        for(let child of graph[current]){
            numParents[child] -= 1
            if(numParents[child] === 0) stack.push(child)
        }
      
    }
  
    return result.join('')
  };
  
  
  module.exports = {
    safeCracking,
  };
  
  const result = safeCracking([
    [3, 1],
    [4, 7],
    [5, 9],
    [4, 3],
    [7, 3],
    [3, 5],
    [9, 1],
  ]); // -> '473591'
  
  
  console.log(result)
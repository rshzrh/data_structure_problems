/**
 * Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. 
 * The function should return an array containing the topological-order of the graph.

The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.
 */

const topologicalOrder = (graph) => {
  
    const numParents = {}
  
    for(let node in graph)
      numParents[node] = 0
  
    for(let node in graph){
      for(let child of graph[node]){
        numParents[child] += 1
      }
    }
    const result = []
    
    const stack = []
    for(let node in numParents){
      if(numParents[node] === 0){
        stack.push(node)
      }
    }
  
    while(stack.length > 0){
      const current = stack.pop()
      result.push(current)
      for(let child of graph[current]){
        numParents[child] -= 1
        if(numParents[child] === 0)
          stack.push(child)
      }
    }
  
    return result
    
    
  };
  
  module.exports = {
    topologicalOrder,
  };
  
  const order = topologicalOrder({
    a: ["f"],
    b: ["d"],
    c: ["a", "f"],
    d: ["e"],
    e: [],
    f: ["b", "e"],
  }); // -> ['c', 'a', 'f', 'b', 'd', 'e']
  
  console.log(order)
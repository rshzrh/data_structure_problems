/***
 * Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. 
 * The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. 
 * A route is a sequence of roads that does not visit a city more than once.

Cities will be numbered 0 to n - 1.

You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

For example, given these roads:

0 --- 1
| \
|  \
|   \
2    3

There is a unique route for between every pair of cities.
So the answer is true.


For example, given these roads:

0 --- 1
| \
|  \
|   \
2 -- 3

There are two routes that can be used to travel from city 1 to city 2:
- first route:  1, 0, 2
- second route: 1, 0, 3, 2 
The answer is false, because routes should be unique.

 */

const rareRouting = (n, roads) => {

    const graph = buildGraph(n, roads)
    return isFullyConnected(graph) && hasUniquePath(graph)
    
  };
  
  function isFullyConnected(graph){
    
    const allNodes = Object.keys(graph)
    
    const start = allNodes[0]
    
    const queue = [start]
    const visited = new Set()
    while(queue.length > 0){
      const current = queue.shift()
      if(visited.has(String(current)))
        continue
  
      visited.add(String(current))
      for(let other of graph[current]){
        queue.push(other)
      }
    }
    console.log("visited", visited)
    console.log(allNodes)
    return visited.size === allNodes.length
    
  }
  
  function hasUniquePath(graph){
    const colors = {}
    for(let city in graph){
      if(!(city in colors)){
        const result = explore(city, graph, true, colors)
        if(result === false)
          return false
      }
    }
    return true
  }
  
  function explore(city, graph, color, colors){
    if(city in colors) return colors[city] === color
    
    colors[city] = color
  
    for(let other of graph[city]){
      const result = explore(other, graph, !color, colors)
      if(!result)
        return false
    }
    return true
  }
  
  function buildGraph(n, roads){
    const graph = {}
    for(let i = 0; i < n; i++)
      graph[i] = []
    for(let [src, dest] of roads){
      graph[src].push(dest)
      graph[dest].push(src)
    }
    return graph
      
  }
  
  module.exports = {
    rareRouting,
  };
  
  
  const result = rareRouting(6, [
    [1, 2],
    [5, 4],
    [3, 0],
    [0, 1],
    [0, 4],
  ]); // -> false
  console.log(result)
  
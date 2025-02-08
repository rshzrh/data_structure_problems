/***
 * Write a function, hasCycle, that takes in an object representing the adjacency list of a directed graph. 
 * The function should return a boolean indicating whether or not the graph contains a cycle.
 */

const hasCycle = (graph) => {
    

    for(let node in graph){

        let result = findPath(node, node, graph, new Set())
        if(result){
            console.log("loop found from ", node)
            return true
        }
            
    }

    return false
  };

function findPath(start, end, graph, visited){

    console.log(start, "->", end)
    console.log(graph[start])

    if(visited.has(start))
        return false
    visited.add(start)
    
    if(graph[start].includes(end))
        return true

    for(let other of graph[start]){
        const hasPath = findPath(other, end, graph, visited)
        if(hasPath)
            return true
    }
    return false
}
  const result = hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
    g: [],
  }); //true

  console.log(result)

/***
 * Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
 * The function should return the number of connected components within the graph.
 */

const connectedComponentsCount = (graph) => {
    
    const visited = new Set()
    let counter = 0
    for(let node in graph){
        console.log("starting from ", node)
        if(explore(node, graph, visited) === true)
            counter += 1
    }
    return counter
};

function explore(node, graph, visited){

    console.log("node in explore: ", node)
    // console.log("visited: ", visited)
    if(visited.has(String(node))){
        console.log(visited)
        console.log(" already visited: ", node)
        return false
    }
        
    visited.add(String(node))

    const neighbors = graph[node]
    console.log(node, " -> ", neighbors)
    for(let other of neighbors){
        explore(other, graph, visited)
    }
    console.log("new component starts from: ", node)
    return true

}

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  })); // -> 2
  
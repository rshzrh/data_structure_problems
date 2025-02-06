/***
 * Write a function, largestComponent, that takes in the adjacency list of an undirected graph. 
 * The function should return the size of the largest connected component in the graph.
 */

const largestComponent = (graph) => {
    let largest = 0
    const visited = new Set()
    for(let node in graph){
        const count = explore(node, graph, visited)
        if(count > largest)
            largest = count
    }

    return largest

  };

  function explore(node, graph, visited){
    let count = 1
    if(visited.has(String(node))){
        return 0
    }
    visited.add(String(node))
    for(let other of graph[node]){
        count += explore(other, graph, visited)
    }

    return count
  }
  
  const largest = largestComponent({
    0: ['4','7'],
    1: [],
    2: [],
    3: ['6'],
    4: ['0'],
    6: ['3'],
    7: ['0'],
    8: []
  }); // -> 3

  console.log(largest)
  
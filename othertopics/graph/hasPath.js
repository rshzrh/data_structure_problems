/**
 * Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
 * The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
 */

const hasPath = (graph, src, dest) => {

    const stack = [src]
    while(stack.length > 0){
        const current = stack.pop()
        const neighbors = graph[current]
        if(neighbors.includes(dest))
            return true
        for(let node of neighbors){
            stack.push(node)
        }
    }
    return false
}
;

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  console.log(hasPath(graph, 'i', 'h')); // true
  
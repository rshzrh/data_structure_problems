/**
 * Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
 * The function should return the length of the shortest path between A and B.
 * Consider the length as the number of edges in the path, not the number of nodes.
 * If there is no path between A and B, then return -1. You can assume that A and B exist as nodes in the graph.
 */

const shortestPath = (edges, nodeA, nodeB) => {
    const graph = {}
    for(let edge of edges){
        let src = edge[0]
        let dest = edge[1]
        if(src in graph)
            graph[src].push(dest)
        else
            graph[src] = [dest]

        if(dest in graph)
            graph[dest].push(src)
        else
            graph[dest] = [src]
    }
    console.log(graph)

    
    const visited = new Set()
    const queue = [{node: nodeA, distance: 0}]
    while(queue.length > 0){
        console.log(queue)
        const current = queue.shift()
        const node = current.node
        const distance = current.distance
        
        if(visited.has(String(node)))
            continue
        visited.add(String(node))
        if(node === nodeB)
            return distance

        for(let other of graph[node])
            queue.push({node: other, distance: distance + 1})
    }

    return -1
};


const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2

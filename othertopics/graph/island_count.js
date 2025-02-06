/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls.
 * W represents water and L represents land.
 * The function should return the number of islands on the grid.
 * An island is a vertically or horizontally connected region of land.
 */

const islandCount = (grid) => {
  const graph = buildGraph(grid);
  console.log(graph)

  const visited = new Set()
  let count = 0
  for(let node in graph){
    if(explore(node, graph, visited)){
        count++
    }
  }
  return count
};

function explore(node, graph, visited){
    if(visited.has(node))
        return false
    visited.add(node)

    for(let other of graph[node])
        explore(other, graph, visited)
    return true
}

function buildGraph(grid) {
    const graph = {}

    let height = grid.length
    let width = grid[0].length
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            
            if(grid[i][j] === 'L'){
                const nodeName = createName(i, j)
                const neighbors = []
                if(i - 1 >= 0 && grid[i-1][j] === 'L')
                    neighbors.push(createName(i -1, j))
                if(i + 1 < height && grid[i + 1][j] === 'L')
                    neighbors.push(createName(i + 1, j))
                if(j + 1 < width && grid[i][j + 1] === 'L')
                    neighbors.push(createName(i, j + 1))
                if(j - 1 >= 0 && grid[i][j - 1] === 'L')
                    neighbors.push(createName(i, j - 1))
                graph[nodeName] = neighbors
            }
        }
    }
    return graph
}

function createName(nodeA, nodeB){
    return `${nodeA}-${nodeB}`
}

const grid = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
  ];

console.log(islandCount(grid)); // -> 3

/***
 * Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
 * W represents water and L represents land.
 * The function should return the size of the smallest island.
 * An island is a vertically or horizontally connected region of land.
 * You may assume that the grid contains at least one island.
 */

const minimumIsland = (grid) => {
  const graph = buildGraph(grid)
  console.log(graph)
  const visited = new Set()
  let min = Infinity

  for(let node in graph){
    let count = explore(node, graph, visited)
    console.log(node, "->", count)
    if(count > 0 && count < min)
        min = count
  }

  return min
};

function explore(node, graph, visited){
    if(visited.has(node))
        return 0
    visited.add(node)

    let count = 1
    for(let other of graph[node])
        count += explore(other, graph, visited)
    return count
}

function buildGraph(grid) {
  const graph = {};

  let height = grid.length;
  let width = grid[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === "L") {
        const nodeName = createName(i, j);
        const neighbors = [];
        if (i - 1 >= 0 && grid[i - 1][j] === "L")
          neighbors.push(createName(i - 1, j));
        if (i + 1 < height && grid[i + 1][j] === "L")
          neighbors.push(createName(i + 1, j));
        if (j + 1 < width && grid[i][j + 1] === "L")
          neighbors.push(createName(i, j + 1));
        if (j - 1 >= 0 && grid[i][j - 1] === "L")
          neighbors.push(createName(i, j - 1));
        graph[nodeName] = neighbors;
      }
    }
  }
  return graph;
}

function createName(nodeA, nodeB) {
  return `${nodeA}-${nodeB}`;
}

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid)); // -> 2

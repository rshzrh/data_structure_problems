/***
 * Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. 
 * In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. 
 * The function should return a number representing the length of the shortest path from the starting position to a carrot. 
 * You may move up, down, left, or right, but cannot pass through walls (X). 
 * If there is no possible path to a carrot, then return -1.
 */

const closestCarrot = (grid, startRow, startCol) => {
    
    const [graph, carrots] = buildGraph(grid)
    console.log(carrots)
    
    const start = createName(startRow, startCol)

    const queue = [{node: start, distance: 0}]
    const visited = new Set()

    while(queue.length > 0){
        const current = queue.shift()
        console.log("current: ", current)
        const node = current.node
        const distance = current.distance
        if(carrots.includes(node))
            return distance

        if(visited.has(node))
            continue

        visited.add(node)

        for(let other of graph[node]){
            queue.push({node: other, distance: distance + 1})
        }
    }

    return -1

    
};

const buildGraph = (grid) => {
    const height = grid.length
    const width = grid[0].length
    const graph = {}
    const carrots = []
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            // console.log('processing (i, j)', i, ',', j)
            if(grid[i][j] === 'O' || grid[i][j] === 'C'){
                const nodeName = createName(i, j)
                const neighbors = []

                if(i - 1 >= 0 && ['O', 'C'].includes(grid[i - 1][j]))
                    neighbors.push(createName(i - 1, j))
                if(i + 1 < height && ['O', 'C'].includes(grid[i + 1][j]))
                    neighbors.push(createName(i + 1, j))
                if(j + 1 < width && ['O', 'C'].includes(grid[i][j + 1]))
                    neighbors.push(createName(i, j + 1))
                if(j - 1 >= 0 && ['O', 'C'].includes(grid[i][j - 1]))
                    neighbors.push(createName(i, j - 1))

                graph[nodeName] = neighbors
            }
            if(grid[i][j] === 'C'){
                carrots.push(createName(i , j))
            }
        }
    }
    return [graph, carrots]
}
const createName = (i, j) => {
    return `${i}-${j}`
}

const grid = [
    ['O', 'O', 'X', 'X', 'X'],
    ['O', 'X', 'X', 'X', 'C'],
    ['O', 'X', 'O', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'X', 'X'],
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'C', 'O', 'O'],
    ['O', 'O', 'O', 'O', 'O'],
  ];
  
  
  const result = closestCarrot(grid, 3, 4);
  console.log(result)
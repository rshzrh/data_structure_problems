/***
 * Write a function, bestBridge, that takes in a grid as an argument. 
 * The grid contains water (W) and land (L). 
 * There are exactly two islands in the grid. 
 * An island is a vertically or horizontally connected region of land. 
 * Return the minimum length bridge needed to connect the two islands. 
 * A bridge does not need to form a straight line.
 */

const bestBridge = (grid) => {

    let firstIsland = []
    const rows = grid.length
    const cols = grid[0].length

    for(let i = 0; i < rows; i++){
        if(firstIsland.length > 0)
            break
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 'L'){
                firstIsland = findIsland(i, j, grid, [])
                break
            }
        }
    }
    console.log(firstIsland)

    let distance = findDistance(firstIsland, grid) - 1
    console.log(grid)
    console.log(distance)

    return distance

    
};

function findDistance(firstIsland, grid){
    const queue = []
    for(let land of firstIsland){
        queue.push({name: land, distance: 0})
    }

    const visited = new Set()

    while(queue.length > 0){
        const current = queue.shift()
        const name = current.name
        console.log("processing: " + name)
        const distance = current.distance

        if(visited.has(name))
            continue
        visited.add(name)
        const [i, j] = explodeName(name)

        console.log(grid)


        if(grid[i][j] === 'L' && !firstIsland.includes(name))
            return distance


        if(isInbound(i - 1, j, grid)){
            queue.push({name: createName(i - 1, j), distance: distance + 1})
        }

        if(isInbound(i + 1, j, grid) ){
            queue.push({name: createName(i + 1, j), distance: distance + 1})
        }
        if(isInbound(i, j - 1, grid) ){
            queue.push({name: createName(i, j - 1), distance: distance + 1})
        }

        if(isInbound(i, j + 1, grid) ){
            queue.push({name: createName(i, j + 1), distance: distance + 1})
        }
    }
    return 0

}
const findIsland = (i, j, grid, visited) => {
    if(!isInbound(i, j, grid)) return visited
    if(visited.includes(createName(i, j)) || grid[i][j] === 'W') return visited

    visited.push(createName(i, j))
    findIsland(i - 1, j, grid, visited)
    findIsland(i + 1, j, grid, visited)
    findIsland(i, j + 1, grid, visited)
    findIsland(i, j - 1, grid, visited)
    return visited
    
}


function isInbound(i, j, grid){
    const rows = grid.length
    const cols = grid[0].length
    return (0 <= i && i < rows) && ( 0 <= j && j < cols)
}
function createName(i, j){
    return `${i}-${j}`
}

function explodeName(nodeName){
    const fields = nodeName.split("-")
    return [Number(fields[0]), Number(fields[1])]
}

const grid = [
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "L", "W", "W"],
    ["W", "W", "W", "W", "L", "L", "W", "W"],
    ["W", "W", "W", "W", "L", "L", "L", "W"],
    ["W", "W", "W", "W", "W", "L", "L", "L"],
    ["L", "W", "W", "W", "W", "L", "L", "L"],
    ["L", "L", "L", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W"],
  ];
bestBridge(grid)
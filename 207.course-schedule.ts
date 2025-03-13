/*
 * @lc app=leetcode id=207 lang=typescript
 *
 * [207] Course Schedule
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = buildGraph(numCourses, prerequisites)
    const visited: Set<number> = new Set<number>()

    // console.log(graph)
    for(let node in graph){
        const result = hasCycle(graph, Number(node), new Set<number>, visited)
        if(result){
            // console.log("loop found from", node)
            return false
        }
    }
    return true
}

function hasCycle(graph: {[key: number]: number[]}, node: number, visiting: Set<number>, visited: Set<number>){
    if(visited.has(node)) return false
    if(visiting.has(node)) return true

    visiting.add(node)

    for(let other of graph[node]){
        if(hasCycle(graph, other, visiting, visited))
            return true
    }

    visiting.delete(node)
    visited.add(node)

    return false
}

function canFinishWithPathCheck(numCourses: number, prerequisites: number[][]): boolean {

    const graph = buildGraph(numCourses, prerequisites)
    
    // console.log(graph)
    for(let node in graph){
        const visited:Set<number> = new Set<number>()
        const result = hasPath(graph, Number(node), Number(node), visited)
        if(result){
            // console.log("loop found from", node)
            return false
        }
    }
    return true
};

function hasPath(graph: {[key: number]: number[]}, src: number, dest: number, visited:Set<number>){
    
    if(visited.has(src))
        return false
    visited.add(src)
    if(graph[src].includes(dest))
        return true
    for(let neighbor of graph[src]){
        if(hasPath(graph, neighbor, dest, visited))
            return true
    }
    return false
}

function buildGraph(numCourses: number, prerequisites: number[][]): { [key: number]: number[] } {
    const graph: { [key: number]: number[] } = {}
    for(let i = 0; i < numCourses; i++){
        graph[i] = []
    }
    for(let [src, dest] of prerequisites){
        graph[src].push(dest)
    }
    return graph
}
// @lc code=end

const numCourses = 5
const prerequisites = [[1,4],[2,4],[3,1],[3,2]]

console.log(canFinish(numCourses, prerequisites))
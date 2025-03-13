/*
 * @lc app=leetcode id=210 lang=typescript
 *
 * [210] Course Schedule II
 */

// @lc code=start
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = buildGraph(numCourses, prerequisites)
    // console.log(graph)
    const order: number[] = []

    const queue: number[] = []
    for(let node in graph){
        if(graph[node].numParents === 0)
            queue.push(Number(node))
    }

    // console.log(queue)

    while(queue.length > 0){
        // console.log("queue: ", queue)        
        const current = queue.shift()
        order.push(current)

        // console.log(current, "|", graph)
        for(let child of graph[current].children){
            graph[child].numParents--
            if(graph[child].numParents === 0)
                queue.push(child)
        }

    }
    if(order.length === numCourses)
        return order.reverse()

    return []
};



function buildGraph(numCourses: number, prerequisites: number[][]): {[key: number]: {numParents: number, children: number[]}} {
    const graph: {[key: number]: {numParents: number, children: number[]}} = {}

    for(let i = 0; i < numCourses; i++){
        graph[i] = {numParents: 0, children: []}
    }

    for(let [src, dest] of prerequisites){
        graph[src].children.push(dest)
        graph[dest].numParents++
    }

    return graph
}
// @lc code=end

const numCourses = 4
const prerequisites = [[1,0],[2,0],[3,1],[3,2], [0, 1]]

console.log(findOrder(numCourses, prerequisites))
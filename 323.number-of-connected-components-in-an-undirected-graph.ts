/**
 * 
 * 323. Number of Connected Components In An Undirected Graph - Explanation
Problem Link

Description
There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

The nodes are numbered from 0 to n - 1.

Return the total number of connected components in that graph.

Example 1: 
Input:
n=3
edges=[[0,1], [0,2]]

Output:
1

Example 2: 
Input:
n=6
edges=[[0,1], [1,2], [2,3], [4,5]]

Output:
2

 */

function countComponents(n: number, edges: number[][]): number{
    let components = 0

    const graph = buildGraph(n, edges)
    const visited: Set<number> = new Set<number>()
    

    for(let node in graph){

        if(visited.has(Number(node))) continue
        if(explore(graph, Number(node), visited) > 0){
            components++
        }
    }
    return components
}

function explore(graph: {[key: number]: number[]}, node: number, visited: Set<number>): number{
    
    let size = 0
    const queue: number[][] = [[-1, node]]
    while(queue.length > 0){
        const current = queue.shift()

        const parent = current[0]
        const child = current[1]

        if(visited.has(child)) continue
        visited.add(child)
        size++

        for(let other of graph[child]){
            if(other === parent) continue
            queue.push([child, other])
        }

    }
    return size

}

function buildGraph(n: number, edges: number[][]): {[key: number]: number[]}{
    const graph: {[key: number]: number[]} = {}
    for(let i = 0; i < n; i++){
        graph[i] = []
    }
    for(let [src, dest] of edges){
        graph[src].push(dest)
        graph[dest].push(src)
    }
    return graph
}

const n=3
const edges=[[0,1], [0,2]]

console.log(countComponents(n, edges))
/**
 * 261. Graph Valid Tree - Explanation
Problem Link

Description
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Input:
n = 5
edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

Output:
true

Input:
n = 5
edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

Output:
false

 */

function validTree(n: number, edges: number[][]): boolean {
    const graph = buildGraph(n, edges)
    
    const visited:Set<number> = new Set<number>()

    const queue: number[][] = [[-1, 0]] //queue of [parent -> node]
    
    while(queue.length > 0){

        const current = queue.shift()
        const parent = current[0]
        const child = current[1]
        
        if(visited.has(child))
            return false
        visited.add(child)
        for(let other of graph[child]){
            if(other === parent) continue
            queue.push([child, other])
        }

    }
    console.log(visited)

    return visited.size === n
}

function buildGraph(n: number, edges: number[][]): {[key: number]: number[]} {
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

const n = 5
const edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
console.log(validTree(n, edges))
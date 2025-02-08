/***
 * Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments. 
 * Courses have ids ranging from 0 through n - 1. 
 * A single prerequisite of [A, B] means that course A must be taken before course B. 
 * The function should return a boolean indicating whether or not it is possible to complete all courses.
 */

const prereqsPossible = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs)
    console.log(graph)

    for(let node in graph){
        if(hasPath(node, node, graph, new Set())){
            console.log("circle found from: ", node)
            return false
        }
    }
    return true

};

function hasPath(start, end, graph, visited){
    console.log(start, "->", end)
    console.log("visited", visited)
    if(graph[start].includes(end)) return true

    if(visited.has(start))
        return true

    visited.add(start)

    for(let other of graph[start]){
        if(hasPath(other, end, graph, visited)){
            console.log("path found from: ", other)
            return true
        }
            
    }
    visited.delete(start)
    return false
}


function buildGraph(totalNodes, edges){
    const graph = {}
    for(let i = 0; i < totalNodes; i++){
        graph[i] = []
    }

    for(let [src, dest] of edges){
        graph[src].push(dest)
    }
    return graph
}
const numCourses = 6;
const prereqs = [
  [2, 4],
  [1, 0],
  [0, 2],
  [0, 4],
  [5, 3],
  [3, 5],
];
const result = prereqsPossible(numCourses, prereqs); // -> true
console.log(result)

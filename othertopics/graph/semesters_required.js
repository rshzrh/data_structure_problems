/***
 * Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. 
 * Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. 
 * Return the minimum number of semesters required to complete all n courses. 
 * There is no limit on how many courses you can take in a single semester, as long as the prerequisites of a course are satisfied before taking it.
 * Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. 
 * You must take A in some semester before B.
 * You can assume that it is possible to eventually complete all courses.
 */

const semestersRequired = (numCourses, prereqs) => {

    const graph = buildGraph(numCourses, prereqs)
    console.log(graph)
    const distances = initializeDistances(graph)
    console.log(distances)

    let longest = -1 * Infinity
    for(let node in graph){
        let distance = findDistance(node, graph, distances)
        if(distance > longest)
            longest = distance
    }
    console.log(distances)
    console.log(longest)
    return longest
};

function findDistance(node, graph, distances){
    if(node in distances) return distances[node]

    let distance = 1

    for(let other of graph[node]){
        let dist = 1 + findDistance(other, graph, distances)
        if(dist > distance)
            distance = dist
    }
    distances[node] = distance
    return distance

}

function initializeDistances(graph){
    const distances = {}
    for(let node in graph){
        if(graph[node].length === 0)
            distances[node] = 1
    }
    return distances
}


function buildGraph(totalNodes, edges){
    const graph = {}
    for(let i = 0; i < totalNodes; i++)
        graph[i] = []

    for(let edge of edges){
        let src = edge[0]
        let dest = edge[1]
        graph[src].push(dest)
    }
    return graph
}

const numCourses = 7;
const prereqs = [
  [4, 3],
  [3, 2],
  [2, 1],
  [1, 0],
  [5, 2],
  [5, 6],
];
semestersRequired(numCourses, prereqs); // -> 3
/***
 * Write a function, longestPath, that takes in an adjacency list for a directed acyclic graph. 
 * The function should return the length of the longest path within the graph. 
 * A path may start and end at any two nodes. 
 * The length of a path is considered the number of edges in the path, not the number of nodes.
 ***/

const longestPath = (graph) => {
    let longest = 0

    const nodes = Object.keys(graph)
    const start = nodes[0]

    const stack = [{node: start, distance: 0}]
    const distances = {}

    while(stack.length > 0){
        const current = stack.pop()
        const node = current.node
        const distance = current.distance

        if(distance > longest)
            longest = distance

        let nodeIndex = nodes.indexOf(node)
        if(nodeIndex > -1){
            const removed = nodes.splice(nodeIndex, 1)
            // console.log("node: ", removed, " removed")
        }

        for(let other of graph[node]){
            stack.push({node: other, distance: distance + 1})
        }
        if(stack.length === 0 && nodes.length > 0){
            do{
                const nextNode = nodes.pop()
                if(graph[nextNode].length > 0){
                    stack.push({node: nextNode, distance: 0})
                    break
                }
                    
    
            }while(nodes.length > 0)
        }
        // console.log("node: ", node, "distances: ", distances)
        if(node in distances){
            if(distance > distances[node])
                distances[node] = distance
        }else{
            distances[node] = distance
        }
            
            
    }
    console.log(distances)
    console.log(longest)
    return longest
  };

  const graph = {
    a: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    b: ['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    c: ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    d: ['e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    e: ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'],
    f: ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    g: ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    h: ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    i: ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'],
    j: ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
    k: ['l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'],
    l: ['m', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    m: ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
    n: ['o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    o: ['p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x'],
    p: ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    q: ['r', 's', 't', 'u', 'v', 'w', 'x', 'y'],
    r: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    s: ['t', 'u', 'v', 'w', 'x', 'y', 'z'],
    t: ['u', 'v', 'w', 'x', 'y', 'z'],
    u: ['v', 'w', 'x', 'y', 'z'],
    v: ['w', 'x', 'y', 'z'],
    w: ['x', 'y', 'z'],
    x: ['y', 'z'],
    y: ['z'],
    z: []
  };
  
  
  longestPath(graph); // -> 25
  
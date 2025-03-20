/**
 * Write a function, countComponents, that takes in a number of nodes (n) and an array of edges for an undirected graph. 
 * In the graph, nodes are labeled from 0 to n - 1. The function should return the number of connected components in the given graph.
 */

const find = (roots, node) =>{
    if(roots[node] === node)
      return roots[node]
    const root = find(roots, roots[node])
    roots[node] = root
    return root
  }
  
  const union = (roots, sizes, nodeA, nodeB) => {
    const rootA = find(roots, nodeA)
    const rootB = find(roots, nodeB)
  
    if(nodeA === nodeB)
      return
  
    if(sizes[rootA] >= sizes[rootB]){
      roots[rootB] = rootA
      sizes[rootA] += sizes[rootB]
    }else{
      roots[rootA] = rootB
      sizes[rootB] += sizes[rootB]
    }
  }
  
  const countComponents = (n, edges) => {
    const roots = []
    const sizes = []
    for(let i = 0; i < n; i++){
      roots.push(i)
      sizes.push(1)
    }
  
    for(let [src, dest] of edges){
      union(roots, sizes, src, dest)
    }
    let counter = 0
    for(let i = 0; i < roots.length; i++){
      if(roots[i] === i)
        counter++
    }
    return counter
  };
  
  module.exports = {
    countComponents,
  };
  
  const components = countComponents(6, [
    [0, 3],
    [5, 3],
    [4, 2]
  ]);
  console.log(components)
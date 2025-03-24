/**
 * 
 * Write a function, provinceSizes, that takes in a number of cities n and an array of roads which connect cities. Roads can be traveled in both directions. Cities are named from 0 to n.

A "province" is a group of 1 or more cities that are connected by roads. The "size" of a province is the number of cities that make up that province.

Your function should return an array containing the sizes of the provinces. You may return the result in any order.

Solve this using Union-Find.
 */

const find = (roots, node) => {
    if(roots[node] == node)
      return node
    const root = find(roots, roots[node])
    roots[node] = root
    return root
  }
  
  const union = (roots, sizes, nodeA, nodeB) => {
    const rootA = find(roots, nodeA)
    const rootB = find(roots, nodeB)
  
    if(rootA === rootB)
      return
    if(sizes[rootA] >= sizes[rootB]){
      roots[rootB] = rootA
      sizes[rootA] += sizes[rootB]
    }else{
      roots[rootA] = rootB
      sizes[rootB] += sizes[rootA]
    }
  }
  
  
  const provinceSizes = (n, roads) => {
    const roots = []
    const sizes = []
  
    for(let i = 0; i < n; i++){
      roots.push(i)
      sizes.push(1)
    }
    for(let [src, dest] of roads){
      union(roots, sizes, src, dest)
    }
  
    const result = []
    for(let i = 0; i < roots.length; i++){
      if(roots[i] === i)
        result.push(sizes[i])
    }
    return result
    
  };
  
  module.exports = {
    provinceSizes,
  };
  
  const sizes = provinceSizes(5, [
    [4, 0],
    [3, 2],
  ]);
  console.log(sizes)
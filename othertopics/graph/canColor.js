/***
 * Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph. 
 * The function should return a boolean indicating whether or not it is possible to color nodes of the graph 
 * using two colors in such a way that adjacent nodes are always different colors.
 * For example, given this graph:

x-y-z

It is possible to color the nodes by using red for x and z, 
then use blue for y. So the answer is true.

For example, given this graph:

    q
   / \
  s - r

It is not possible to color the nodes without making two 
adjacent nodes the same color. So the answer is false.

 */

const canColor = (graph) => {
    const colors = {}
    
    for(let node in graph){
      if(!(node in colors)){
      const result = colorize(node, true, graph, colors)  
      if(result === false){
        console.log(node, result, "->", colors)
        return false
      }
      }
        
    }
    console.log(colors)
    return true
    
    
  };
  
  const colorize = (node, color, graph, colors = {}) => {
  
    console.log(node, color, colors)
    
    if(node in colors)
       return colors[node] === color
  
    
    colors[node] = color
    
    for(let other of graph[node]){
      const result = colorize(other, !color, graph, colors)
      if(result === false){
        return false
      }
        
    }
    return true
    
  }
  
  
  module.exports = {
    canColor,
  };
  const result = canColor({
    x: ["y"],
    y: ["x","z"],
    z: ["y"]
  });
  console.log(result)
  
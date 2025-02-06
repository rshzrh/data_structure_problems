/***
 * Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
 * The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
 */

const undirectedPath = (edges, nodeA, nodeB) => {

    const relations = {}
    for(let edge of edges){
      const src = edge[0]
      const dest = edge[1]
      if(src in relations){
        relations[src].push(dest)
      }else{
        relations[src] = [dest]
      }
      if(dest in relations){
        relations[dest].push(src)
      }else{
        relations[dest] = [src]
      }
    }
    
    const processed = {}
    const stack = [nodeA]
    while(stack.length > 0){
      const current = stack.pop()
      if(current in processed)
        continue
      if(current === nodeB)
        return true
      const neighbors = relations[current]
      for(let node of neighbors){
        stack.push(node)
      }
      processed[current] = true
    }
    
    return false
  };

  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges, 'm', 'j')); // -> true
  
  
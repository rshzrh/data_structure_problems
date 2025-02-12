/***
 * Write a function, permutations, that takes in an array an argument. 
 * The function should return a 2D array where each subarray represents one of the possible permutations of the array.

The subarrays may be returned in any order.

You may assume that the input array contains unique elements.
 */
const permutations = (items) => {
    console.log(items)
    if(items.length === 0)
      return [[]]
    
    const result = []
  
    const first = items[0]
    const rest = items.slice(1)
  
    const perms = permutations(rest)
    console.log("perms", perms)
  
    for(let perm of perms){
      for(let i = 0; i < perm.length + 1; i++){
        const newperm = [...perm.slice(0, i), first, ...perm.slice(i)]
  
        result.push(newperm)
        
      }
    }
    console.log(result)
    return result
    
  };
  
  module.exports = {
    permutations,
  };
  
  
  permutations(['a', 'b', 'c']);
  
  // permutations(['a', 'b', 'c']);
  //  permutations(['b', 'c']);
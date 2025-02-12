/***
 * Write a function, subsets, that takes in an array as an argument. 
 * The function should return a 2D array where each subarray represents one of the possible subsets of the array.

The elements within the subsets and the subsets themselves may be returned in any order.

You may assume that the input array contains unique elements.
 */
const subsets = (elements) => {
  
    if(elements.length === 0)
      return [[]]
    
    const result = []
  
    const first = elements[0]
    const excludeFirst = subsets(elements.slice(1))
    const includeFirst = []
    for(let list of excludeFirst){
      result.push([...list, first])
    }
    result.push(...excludeFirst)
    
    
    return result
    
  };
  
  module.exports = {
    subsets,
  };
  
  const result = subsets([]); 
  console.log(result)
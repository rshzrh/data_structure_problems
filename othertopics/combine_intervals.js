/**
 * Write a function, combineIntervals, that takes in an array of intervals as an argument. 
 * Each interval is an array containing a pair of numbers representing a start and end time. 
 * Your function should combine overlapping intervals and return an array containing the combined intervals.

For example:
Given two intervals:

[1, 4] and [3, 7]

The intervals overlap and
should be combined into:

[1, 7]
You may return the combined intervals in any order.

You can assume that the input array contains at least one interval and all intervals are valid with start < end.
 */

const combineIntervals = (intervals) => {
    const sorted = intervals.sort((x, y) =>{
      
      const first = x[0]
      const second = y[0]
      if(first < second)
        return -1
      if(first > second)
        return 1
      return 0
    })
  
    const result = [sorted[0]]
    for(let i = 1; i < sorted.length; i++){
      const start = sorted[i][0]
      const end = sorted[i][1]
  
      const last = result[result.length - 1]
      if(start >= last[0] && start <= last[1]){
        result.pop()
        result.push([last[0], Math.max(end, last[1])])
      }else{
        result.push(sorted[i])
      }
      
    }
    return result
    
  };
  
  module.exports = {
    combineIntervals,
  };
  
  
  const intervals = [
    [64, 70],
    [50, 55],
    [62, 65],
    [12, 50],
    [72, 300000],
  ];
  const result = combineIntervals(intervals);
  console.log(result)
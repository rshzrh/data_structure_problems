/***
 * Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. 
 * The function should return the length of the longest subsequence of strictly increasing numbers.

A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.
 */

const maxIncreasingSubseq = (numbers, index = 0, prev = -Infinity, memo = {}) => {
    const key = index + ':' + prev
    if(key in memo)
        return memo[key]

    if(index >= numbers.length) return 0
  
    const current = numbers[index]
    let take = 0
    if(current > prev)
        take = 1 + maxIncreasingSubseq(numbers, index + 1, current, memo)
    const notTake = maxIncreasingSubseq(numbers, index + 1, prev, memo)

    
    const result =  Math.max(take, notTake)
    memo[key] = result
    return result
    
  };
  
  module.exports = {
    maxIncreasingSubseq,
  };

  
const numbers = [4, 18, 20, 10, 12, 15, 19];
maxIncreasingSubseq(numbers); // -> 5

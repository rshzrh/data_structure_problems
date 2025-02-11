/***
 * Write a function, quickestConcat, that takes in a string and an array of words as arguments. 
 * The function should return the minimum number of words needed to build the string by concatenating words of the array. 
 * If it is not possible to build the string, then return -1.

You may use words of the array as many times as needed.
 */

const quickestConcat = (s, words, memo = {}) => {
    if(s in memo)
      return memo[s]
    
    if(s === null || s.length === 0)
      return 0
  
    let min = Infinity
    
    for(let word of words){
      const begin = s.indexOf(word)
      if(begin === 0){
        const target = s.slice(word.length)
        
        const result = quickestConcat(target, words, memo)
        // console.log(s, target, result)
        if(result >= 0){
  
        if(result < min)
          min = 1 + result
          
        }
      }
    }
    if(min === Infinity)
      min = -1
    memo[s] = min
    return min
    
  };
  
  module.exports = {
    quickestConcat,
  };
  
  console.log(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut'])); // -> 2
  console.log(quickestConcat('caution', ['ion', 'caut', 'caution'])); // -> 1
  console.log(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])); // -> 4)
  console.log(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch'])); // -> 3)
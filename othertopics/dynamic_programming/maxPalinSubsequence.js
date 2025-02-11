/***
 * Write a function, maxPalinSubsequence, that takes in a string as an argument. 
 * The function should return the length of the longest subsequence of the string that is also a palindrome.

A subsequence of a string can be created by deleting any characters of the string, while maintaining the relative order of characters.
 */

const maxPalinSubsequence = (str) => {
    return explore(str, 0, str.length - 1)
  };
  
  function explore(str, begin, end, memo = {}){
  
    const key = begin + '-' + end
    if(key in memo)
      return memo[key]
    
    if(begin > end || end >= str.length)
      return 0
    if(begin === end)
      return 1
  
    let first = 0
    let second = 0
    let third = 0
    if(str[begin] === str[end])
      first = 2 + explore(str, begin + 1, end - 1, memo)
    else{
      second = explore(str, begin + 1, end, memo)
      third = explore(str, begin, end - 1, memo)
    }
    memo[key] = Math.max(first, second, third)
    return memo[key]
    
  }
  

  
  console.log(maxPalinSubsequence("luwxult")); // -> 5
  console.log(maxPalinSubsequence("xyzaxxzy")); // -> 6
  console.log(maxPalinSubsequence("lol")); // -> 3
  console.log(maxPalinSubsequence("boabcdefop")); // -> 3
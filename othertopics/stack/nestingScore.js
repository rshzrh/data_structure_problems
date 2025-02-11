/***
 * Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.
 */

const nestingScore = (str) => {
    if(str === null || str.length === 0)
      return 0
    
    const stack = [0]
  
    for(let i = 0; i < str.length; i++){
      const current = str[i]
      if(current === '[')
        stack.push(0)
      else{
        let top = stack.pop()
        if(top === 0){
          top = stack.pop()
          stack.push(1 + top)
        }else{
          stack.push(2 * top)
        }
      }
    }
    let score = 0
    while(stack.length > 0){
      score += stack.pop()
    }
    console.log(stack)
    return score
  };
  
  module.exports = {
    nestingScore,
  };
  
  // nestingScore("[]"); // -> 1
  
  
  // nestingScore("[[][]]"); // -> 4
  
  // nestingScore("[[]]"); // -> 2
  // nestingScore("[[]]"); // -> 2
  // nestingScore("[[][]]"); // -> 4
  nestingScore("[][[][]][[]]"); // -> 7
  
  
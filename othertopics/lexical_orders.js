/***
 * Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. 
 * The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. 
 * If the second word should appear first, then return false.

Note that the alphabet string may be any arbitrary string.

Intuitively, Lexical Order is like "dictionary" order:

You can assume that all characters are lowercase a-z.

You can assume that the alphabet contains all 26 letters.
 */

const lexicalOrder = (word1, word2, alphabet) => {

    const length = Math.max(word1.length, word2.length)
    for(let i = 0; i < length; i++){
      const value1 = word1[i]
      const value2 = word2[i]
  
      console.log(value1, value2)
  
      const firstIndex = alphabet.indexOf(value1)
      const secondIndex = alphabet.indexOf(value2)
  
      if(firstIndex > secondIndex){
        return false
      }else if (firstIndex < secondIndex){
        return true
      }
    }
    return true
    
  };
  
  module.exports = {
    lexicalOrder,
  };
  
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  lexicalOrder("app", "application", alphabet); // -> true

   alphabet = "ghzstijbacdopnfklmeqrxyuvw";
lexicalOrder("zoo", "dinner", alphabet); // -> true

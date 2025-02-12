/***
 * Write a function, substitutingSynonyms, that takes in a sentence and an object as arguments. The object contains words as keys whose values are arrays containing synonyms. The function should return an array containing all possible sentences that can be formed by substituting words of the sentence with their synonyms.

You may return the possible sentences in any order, as long as you return all of them.
 */

const substituteSynonyms = (sentence, synonyms) => {

    const words = sentence.split(' ')
    const result = explore(words, synonyms)
    const strings = []
    for(let combination of result){
      strings.push(combination.join(' '))
    }
    console.log(strings)
    return strings
  }
  
  const explore = (words, synonyms) => {
  
    if(words.length === 0) return [[]]
  
    const first = words[0]
    const remaining = words.slice(1)
  
    console.log("first: ", first)
    console.log("remaining", remaining)
  
    const combinations = explore(remaining, synonyms)
  
    const result = []
    
    if(first in synonyms){
      console.log("first", first, "in synonyms")
      for(let syn of synonyms[first]){
        console.log('pushing syn', syn)
        for(let comb of combinations)
          result.push([syn, ...comb])
      }
    }else{
      console.log("first", first, " not found in synonyms")
      for(let comb of combinations)
        result.push([first, ...comb])
    }
    // console.log(result)
  
    return result
  }
  
  module.exports = {
    substituteSynonyms,
  };

  
  const sentence = "follow the yellow brick road";
const synonyms = {
  follow: ["chase", "pursue"],
  yellow: ["gold", "amber", "lemon"],
};

substituteSynonyms(sentence, synonyms);
// [
//   'chase the gold brick road',
//   'chase the amber brick road',
//   'chase the lemon brick road',
//   'pursue the gold brick road',
//   'pursue the amber brick road',
//   'pursue the lemon brick road'
// ]

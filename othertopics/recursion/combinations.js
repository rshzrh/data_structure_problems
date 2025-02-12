const createCombinations = (items, k) => {
    console.log(items, k);
  
    if (k === 1) {
      const result = [];
      for (let item of items) result.push([item]);
      return result;
    }
  
    const result = [];
    for (let i = 0; i < items.length; i++) {
      const first = items[i];
      const others = items.slice(i + 1);
  
      const combinations = createCombinations(others, k - 1);
      console.log("combinations for ", others, k - 1, "->", combinations);
  
      for (let comb of combinations) {
        result.push([first, ...comb]);
      }
    }
    console.log(result);
    return result;
  };
  
  module.exports = {
    createCombinations,
  };
  

createCombinations(["a", "b", "c", "d"], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

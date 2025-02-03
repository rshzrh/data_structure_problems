/**
 * Write a function, pairSum, that takes in an array and a target sum as arguments. 
 * The function should return an array containing a pair of indices whose elements sum to the given target. 
 * The indices returned must be unique.
    Be sure to return the indices, not the elements themselves.
    There is guaranteed to be one such pair that sums to the target.
    pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

 */

const pairSumSlow = (numbers, targetSum) => {
    // console.log(`targetSum: ${targetSum} -> ${numbers}`)

    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === targetSum)
                return [i, j]
        }
    }
    return []
};

const pairSumTwoPass = (numbers, targetSum) => {
    // console.log(`targetSum: ${targetSum} -> ${numbers}`)
    const map = {}
    for(let i = 0; i < numbers.length; i++){
        const remained = targetSum - numbers[i]
        map[remained] = i
    }
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] in map && map[numbers[i]] !== i){
            return [i, map[numbers[i]]]
        }
    }
    return []
};

const pairSum = (numbers, targetSum) => {
    const previousNums = {};
    for (let i = 0; i < numbers.length; i += 1) {
      const num = numbers[i];
      const complement = targetSum - num;
      if (complement in previousNums) return [i, previousNums[complement]];
      
      previousNums[num] = i;
    }
  };

console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]

console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]

console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([6, 4, 2, 8 ], 12)); // -> [1, 3]
const numbers = [];
for (let i = 0; i <= 30000; i += 1) {
  numbers.push(i);
}
console.log(pairSum(numbers, 59999)); // -> [ 29999, 30000 ] 


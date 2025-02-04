const fiveSort = (numbers) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    if (numbers[left] === 5) {
      if (numbers[right] !== 5) {
        numbers[left] = numbers[right];
        numbers[right] = 5;
        left++;
        right--;
        continue;
      } else {
        right--;
        continue;
      }
    } else {
      left++;
    }
  }
};
const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const numbers = [...fives, ...fours];
fiveSort(numbers);
console.log(numbers);

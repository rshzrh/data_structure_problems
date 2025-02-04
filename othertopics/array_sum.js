const sumOfLengths = (strings) => {
  if (strings === null || strings === null || strings.length === 0) return 0;
    console.log(strings)
  return strings[0].length + sumOfLengths(strings.slice(1));
};

console.log(sumOfLengths(["", " ", "  ", "   ", "    ", "     "])); // -> 15

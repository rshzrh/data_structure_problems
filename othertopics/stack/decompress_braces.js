/***
 * Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

You may assume that every number n is guaranteed to be an integer between 1 through 9.

You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
 */

const decompressBraces = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current === "{") continue;
    if (current === "}") {
      let acc = "";
      while (true) {
        const top = stack.pop();
        if (Number(top) <= 9) {
          for (let i = 0; i < Number(top); i++) {
            stack.push(acc);
          }
          break;
        } else {
          acc = top + acc;
        }
      }
    } else {
      stack.push(current);
    }
  }
  let result = "";

  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
  }
  console.log(result);
  return result;
};

decompressBraces("2{q}3{tu}v"); // -> qqtututuv
decompressBraces("2{y3{o}}s"); // -> yoooyooos
decompressBraces("z3{a2{xy}b}"); // -> zaxyxybaxyxybaxyxyb

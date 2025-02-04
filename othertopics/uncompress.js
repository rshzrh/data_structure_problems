/***
 * Write a function, uncompress, that takes in a string as an argument. 
 * The input string will be formatted into multiple groups according to the following pattern:
 * <number><char>

    for example, '2c' or '3a'.
The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
You may assume that the input string is well-formed according to the previously mentioned pattern.
 */
const uncompress = (s) => {

    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let result = ""
    let currentNumber = ""
    for(let i = 0; i < s.length; i++){
        let ch = s.charAt(i)
        if(ch in digits){
            currentNumber = currentNumber + ch
        }else{
            let count = Number(currentNumber)
            for(let j = 0; j < count; j++)
                result = result + ch
            currentNumber = ""
        }
    }
    return result
};

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb')
console.log(uncompress("2p1o5p")); // -> 'ppoppppp')
console.log(uncompress("3n12e2z")) // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y"))

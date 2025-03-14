/**
 * Write a function, isSubsequence, that takes in string1 and string2. 
 * The function should return a boolean indicating whether or not string1 is a subsequence of string2.

A subsequence is a string that can be formed by deleting 0 or more characters from another string.
isSubsequence("bde", "abcdef"); // -> true
isSubsequence("bda", "abcdef"); // -> false
isSubsequence("ser", "super"); // -> true

 */

function isSubsequence(string1: string, string2: string): boolean{
    let first:number = 0
    let second: number = 0

    while(first < string1.length && second < string2.length){
        if(string1[first] === string2[second])
            first++
        second++
    }
    const result =  first === string1.length
    console.log(result)
    return result
}

isSubsequence("bde", "abcdef"); // -> true
isSubsequence("bda", "abcdef"); // -> false
isSubsequence("ser", "super"); // -> true
/**
 * Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

For example, given 156, you should return 3.
 */

function findLongest(n){
    let longest = 0
    let current = 0
    while(n > 0){
        const digit = n % 2
        n = (n - digit) / 2
        if(digit === 1){
            current++
        }else{
            if(current > longest)
                longest = current
            current = 0
        }
        // console.log(digit)
    }
    if(current != 0)
        longest = current

    return longest
}
console.log(findLongest(8))
console.log(findLongest(15))
console.log(findLongest(156))
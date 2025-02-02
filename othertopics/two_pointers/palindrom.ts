/**
 * Write a program that checks whether an integer is a palindrome. 
 * For example, 121 is a palindrome, as well as 888. 678 is not a palindrome. 
 * Do not convert the integer into a string.
 */

function isPalindrom(x: number):boolean{
    if(x < 0)
        x = Math.abs(x)
    if(x < 10)
        return true

    const digits:number[] = []
    while(x > 0){
        const remainder = x % 10
        digits.push(remainder)
        x = (x - remainder) / 10
    }
    console.log(digits)

    let left = 0
    let right = digits.length - 1

    while(left <= right){
        if(digits[left] != digits[right])
            return false
        left += 1
        right -= 1
    }

    return true
}

console.log(isPalindrom(10))
console.log(isPalindrom(9))
console.log(isPalindrom(11))
console.log(isPalindrom(101))
console.log(isPalindrom(121))
console.log(isPalindrom(888))
console.log(isPalindrom(678))
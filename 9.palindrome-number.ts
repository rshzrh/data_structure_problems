/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindromeWithString(x: number): boolean {
    const converted = String(x)
    const size = converted.length
    for(let i = 0; i < size; i++)
        if(converted[i] != converted[size -1 - i])
            return false
    return true    
};

//The best result
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    
    let numbers: number[] = []
    while(x >= 10){
        const remained = x % 10
        numbers.push(remained)
        x = (x - remained) / 10
    }   
    numbers.push(x)
    const size = numbers.length;
    for(let i = 0; i < size; i++){
        if(numbers[i] != numbers[size - 1 - i]){
            numbers = []
            return false;
        }   
    }
    numbers = []
    return true;
}

function isPalindromeReverse(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    
    const original: number = x
    let reverse: number = 0
    const len = Math.ceil(Math.log10(original + 1));
    // console.log(`original number ${original}`)
    
    let powerIndex = len - 1
    // console.log(`initial powerIndex: ${powerIndex}`)
    while(x >= 10){
        const remained = x % 10
        
        x = (x - remained) / 10
        
        reverse += remained * Math.pow(10, powerIndex)
        // console.log(`powerIndex: ${powerIndex} | remained: ${remained} | x: ${x} | reverse: ${reverse}`)
        powerIndex -= 1
    }   
    reverse += x * Math.pow(10, powerIndex)
    // console.log(`reverse: ${reverse}`)
    
    return original === reverse;
}


// @lc code=end


/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start

function findPalindromes(str: string, left: number, right: number): number{
    let result: number = 0

    while(left >= 0 && right < str.length){
        if(str[left] === str[right]){
            result++
        }else{
            break
        }
        left--
        right++
    }

    return result
}
function countSubstrings(s: string): number {

    let result: number = 0

    for(let i = 0; i < s.length; i++){
        const evenPals = findPalindromes(s, i, i)
        const oddPals = findPalindromes(s, i, i + 1)
        result += evenPals
        result += oddPals
    }
    // console.log(result)
    return result
    
};
// @lc code=end

console.log(countSubstrings("aaa"))
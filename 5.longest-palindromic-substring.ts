/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start


function findPalindromes(str: string, left: number, right: number): string[]{
    const result: string[] = []
    while(left >= 0 && right < str.length){

        if(str[left] === str[right]){
            const palindrome = str.slice(left, right + 1)            
            result.push(palindrome)
        }else{
            break
        }

        left--
        right++
    }
    // console.log(result)
    return result

}

function findMaxString(strs: string[]): string{
    if(strs.length === 0)
        return ""
    let max = strs[0]

    for(let i = 1; i < strs.length; i++){
        if(strs[i].length > max.length)
            max = strs[i]
    }
    return max

}
function longestPalindrome(s: string): string {

    let result = s[0]

    for(let i = 0; i < s.length; i++){

        const evenResults = findPalindromes(s, i, i)

        const oddResults = findPalindromes(s, i, i + 1)
        const max = findMaxString([...evenResults, ...oddResults])
        if(max.length > result.length)
            result = max

    }


    return result

}

// @lc code=end

console.log(longestPalindrome("bababd"))
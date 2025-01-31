/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    
    if(s === null)
        return true
    const refined = s.replace(/[^a-zA-Z0-9]/g, '')

    if(refined.length < 2)
        return true

    const size = refined.length
    for(let i = 0; i < size; i++ ){
        if(refined.charAt(i).toLowerCase() != refined.charAt(size - i - 1).toLowerCase())
            return false
    }

    
    return true
};

let s = "    "
const result = isPalindrome(s)
console.log(result)
// @lc code=end


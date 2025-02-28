/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const chars = []
    const base = 'a'.charCodeAt(0)
    const last = 'z'.charCodeAt(0)
    const numBase = '0'.charCodeAt(0)
    const numLast = '9'.charCodeAt(0)


    for(let i = 0; i < s.length; i++){        
        const lower = s[i].toLocaleLowerCase().charCodeAt(0)
        if((lower >= base && lower <= last) || (lower >= numBase && lower <= numLast))
        chars.push(lower)
    }
    // console.log(chars)
    for(let i = 0; i < chars.length; i++){
        if(chars[i] !== chars[chars.length - i - 1]){
            // console.log('found', i, chars[i], chars[chars.length - i - 1])
            return false
        }
    }
    return true
    
};
const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
// @lc code=end


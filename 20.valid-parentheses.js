/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack = []

    for(let i = 0; i < s.length; i++){
        const current = s[i]
        if(current === '(' || current === '{' || current === '[')
            stack.push(current)
        else{
            const top = stack.pop()
            if(current === ')' && top !== '(')
                return false
            if(current === ']' && top !== '[')
                return false
            if(current === '}' && top !== '{')
                return false


        }

    }
    return stack.length === 0
};
// @lc code=end

console.log(isValid("(){}[]"))
console.log(isValid("(){}[]]"))
console.log(isValid("(){}[]]["))
console.log(isValid("([])"))


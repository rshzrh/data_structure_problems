/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

function isFromSameFamily(first: string, second: string): boolean{
    
    if((first === '(' && second === ')'))
        return true
    if( (first === '{' && second === '}'))
        return true
    if((first === '[' && second === ']'))
        return true
    return false
}

function isValid(s: string): boolean {
    let stack: string[] = []
    for(let i = 0; i < s.length; i++){
        const char = s[i]

        if(stack.length > 0 && isFromSameFamily(stack[stack.length - 1], char))
            stack.pop()
        else
            stack.push(s[i])
    }
    // console.log(stack)
    const valid = stack.length == 0
    stack = []
    return valid
};


// @lc code=end


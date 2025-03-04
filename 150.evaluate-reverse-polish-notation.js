/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    const stack = []
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i]
        if(token === '+' || token === '-' || token === '/' || token === '*'){
            const second = stack.pop()
            const first = stack.pop()

            // console.log(first, token, second)

            let value = 0
            if(token === '*')
                value = first * second
            if(token === '+')
                value = first + second
            if(token === '-')
                value = first - second
            if(token === '/'){
                const divide = first / second
                value = divide >= 0 ? Math.floor(divide) : Math.ceil(divide)
            }
                
            stack.push(value)
        }else{
            stack.push(Number(token))
        }

    }
    if(stack.length === 1)
        return stack[0]
    return 0
    
};
// @lc code=end

const tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens))
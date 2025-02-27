/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    

    const result = explore(n)

    return result
    
};

function explore(n, text = '', open = 0, close = 0){
    if(open > n || close > n)
        return []

    if(text.length === 2 * n)
        return [text]
    const result = []

    if(open < n)
        result.push(...explore(n, text + "(", open + 1, close))
    if(close < open)
        result.push(...explore(n, text + ")", open, close + 1))

    return result
}


// @lc code=end

console.log(generateParenthesis(3))
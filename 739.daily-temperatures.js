/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    const stack = []
    const result = new Array(temperatures.length).fill(-1)

    for(let i = 0; i < temperatures.length; i++){

        const current = temperatures[i]

        while(stack.length > 0 && current > temperatures[stack[stack.length - 1]]){
            const top = stack.pop()
            result[top] = i
        }
        stack.push(i)

    }
    for(let i = 0; i < result.length; i++){
        if(result[i] === -1)
            result[i] = 0
        else
            result[i] = result[i] - i
    }
    return result
    
};
// @lc code=end

temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))

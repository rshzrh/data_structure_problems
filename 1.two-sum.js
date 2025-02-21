/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const remainedMap = {}

    for(let i = 0; i < nums.length; i++){
        remainedMap[target - nums[i]] = i
    }
    // console.log(remainedMap)
    
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(num in remainedMap && i != remainedMap[num]){
            return [i, remainedMap[num]]
        }
        
    
    }
    return [-1, -1]

};
// @lc code=end

const nums = [3, 2, 4]
const target = 6
console.log(twoSum(nums, target))
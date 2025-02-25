/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}
    for(let num of nums){

        if(num in map)
            map[num] += 1
        else
            map[num] = 1
    }
    // console.log(map)
    const acc = new Array(nums.length + 1)
    for(let i = 0; i < acc.length; i++)
        acc[i] = []
    // console.log(acc)
    for(let num in map){
        const count = map[Number(num)]
        
        acc[count].push(Number(num))
    }
    // console.log(acc)
    let index = acc.length - 1
    let total = 0
    const result = []

    while(result.length < k){
        if(acc[index].length > 0){
            total = result.length
            // console.log(acc[index])
            // console.log(total)
            // console.log(k)
            result.push(...acc[index].slice(0, k - total))
            
        }
        index--       
    }
    // console.log(result)
    return result
    
    
};
// @lc code=end

const nums = [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]

const k = 10
console.log(topKFrequent(nums, k))


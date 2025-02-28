/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if(nums.length === 0)
        return 0

    const set = new Set(nums)

    
    
    let longest = 1
    for(let num of set){
        if(!set.has(num - 1)){
            let length = 1

            while(set.has(num + length)){
                length += 1
            }
            longest = Math.max(longest, length)
        }

    }
    return longest
    
};


// @lc code=end

const nums = [1,0,1,2]
console.log(longestConsecutive(nums))
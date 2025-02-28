/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    numbers = nums.sort((a, b) => a - b)
    // console.log(numbers)

    const result = []
    for(let i = 0; i < numbers.length - 2; i++){
        if(i > 0 && numbers[i] == numbers[i - 1])
            continue

        let left = i + 1
        let right = numbers.length - 1
        // console.log("left", left)
        // console.log("right", right)
        while(left < right){
            // console.log("i", i, "left", left, "right", right)
            const sum = numbers[i] + numbers[left] + numbers[right]
            if(sum == 0){
                result.push([numbers[i], numbers[left], numbers[right]])
                while(left < right && numbers[left] === numbers[left + 1]) left += 1
                while(left < right && numbers[right] === numbers[left - 1]) right -= 1
                left++
                right--
            }else if(sum > 0){
                right--
            }else{
                left++
            }
        }

    }
    return result
};


const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4]
// console.log(twoSum(nums, -3))
// const target = 0
const result = threeSum(nums)
console.log(result)
// @lc code=end


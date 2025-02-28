/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {

    let left = 0
    let right = numbers.length - 1

    while(left <= right){
        const sum = numbers[left] + numbers[right]
        if(sum === target)
            return [left + 1, right + 1]
        if(sum > target)
            right--
        else
            left++
    }
    return []

}
var twoSumHash = function(numbers, target) {

    let endIndex = binary_search(numbers, target) + 1
    endIndex = Math.min(endIndex, numbers.length - 1)
    // console.log("end", endIndex)
    const map = {}

    for(let i = 0; i <= endIndex; i++){
        let num = numbers[i]
        const remained = target - num
        // console.log("num", num)
        // console.log("remained", remained)
        // console.log("map", map)
        
        if(num in map && i !== map[num])
            return [map[num] + 1, i + 1]
        map[remained] = i
    }
    return []

    
};

function binary_search(nums, target){
    let left = 0
    let right = nums.length - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target)
            return mid
        if(nums[mid] > target)
            right = mid - 1
        else
            left = mid + 1
        
    }
    return left
}

const nums = [2, 7, 11, 15]
const target = 9
console.log(twoSum(nums, target))

// @lc code=end


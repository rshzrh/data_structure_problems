/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {

    const majorityIndex = Math.floor(nums.length / 2)
    const map = {}
    for(let num of nums){

        if(num in map)
            map[num] += 1
        else
            map[num] = 1
        if(map[num] > majorityIndex)
            return num
    }
    return -1
    
};
// @lc code=end

const nums:number[] = [3,2,3]
console.log(majorityElement(nums))
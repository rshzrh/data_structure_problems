/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSumOn2(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(target === nums[i] + nums[j])
                return [i, j]
        }
    }
    return [];
};

function twoSum(nums: number[], target: number): number[] {
    let valueMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        const remained = target - nums[i]
        const otherIndex = valueMap.get(remained)
        if(otherIndex != undefined){
            valueMap.clear()
            return [otherIndex, i]
        }
        valueMap.set(nums[i], i)
    }    
    valueMap.clear()
    return []
};

// @lc code=end


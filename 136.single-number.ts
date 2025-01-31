/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumberMap(nums: number[]): number {
    if(nums.length === 1)
        return nums[0]

    const map:Map<number, number> = new Map<number, number>()

    for(let i = 0; i < nums.length; i++){
    
        const num = nums[i]
        if(map.has(num)){
            map.delete(num)
        }else{
            map.set(num, num)
        }
    }
    for(let [key, value] of map){
        return key
    }
    return -1
};

function singleNumber(nums: number[]): number {
    /**
     * XOR, or exclusive or, is a logical operation that returns true 
     * when exactly one of two inputs is true.
     * 4 ^ 4 equals to 0
     */
    let result = 0
    for(let i = 0 ; i < nums.length; i++){
        result ^= nums[i]
    }
    return result


}

// @lc code=end


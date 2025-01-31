/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    if(nums === null || nums.length === 0)
        return 0
    if(nums.length === 1 && nums[0] != val)
        return 1

    let left = 0
    let unique = 0

    for(let right = left; right < nums.length; right++){
        // console.log(`left: ${left} | right: ${right} | ${nums}`)
        
        if(nums[left] === val && nums[right] === val){
            continue
        }
        if(nums[left] === val && nums[right] != val){
            nums[left] = nums[right]
            left++
            nums[right] = val
        }
        else if(nums[left] != val)
            left++
        
        unique++

    }
    return unique
}

// @lc code=end


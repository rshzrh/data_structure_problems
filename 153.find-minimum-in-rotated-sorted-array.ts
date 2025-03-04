/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {

    let left = 0
    let right = nums.length - 1
    
    let min = nums[0]

    while(left < right){
        let mid = Math.floor((left + right) / 2)
        let current = nums[mid]
        let low = nums[left]
        let high = nums[right]

        if(low < min)
            min = low

        if(current > high){
            left = mid + 1
        }else{
            right = mid
        }


    }
    return nums[left]
    
};
// @lc code=end

const nums:number[] = [3, 2, 1]
console.log(findMin(nums))

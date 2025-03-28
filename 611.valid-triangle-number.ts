/*
 * @lc app=leetcode id=611 lang=typescript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
function triangleNumber(nums: number[]): number {

    nums = nums.sort((a, b) => (a - b))

    let counter: number = 0

    for(let i = nums.length - 1; i > 0; i--){
        let left = 0
        let right = i - 1


        let side1 = nums[i]
        while(left < right){
            let side2 = nums[left]
            let side3 = nums[right]

            if(side2 + side3 > side1){
                counter += right - left
                right--
            }else{
                left++
            }
        }

    }
    return counter
    
};
// @lc code=end

const nums = [2,2,3,4]
const result = triangleNumber(nums)
console.log(result)
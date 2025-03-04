/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let index = -1

    let left = 0
    let right = nums.length - 1

    while(left <= right){

        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target)
            return mid

        let low = nums[left]
        let high = nums[right]
        let current = nums[mid]

        if(low <= current){ //we are in a sorted partition
            if(target >= low && target <= current)
                right = mid - 1
            else
                left = mid + 1
        }else{ //not sorted segment
            if(target <= high && target >= current)
                left = mid + 1
            else
                right = mid - 1

        }

    }
    return index
};
// @lc code=end

const num = [3, 1]
const target:number = 1
console.log(search(num, target))
/**
 * Given an array of integers nums and an integer k, 
 * find the maximum sum of any contiguous subarray of size k.
Example:
Input: nums = [2, 1, 5, 1, 3, 2], k = 3
Output: 9
Explanation: The subarray with the maximum sum is [5, 1, 3] with a sum of 9.
 */

function maximumSubArray(numbers: number[], k: number): number {

    let left = 0
    let right = 0
    let max = 0
    let result = 0

    while(right < numbers.length){
        let windowSize = right - left + 1
        max += numbers[right]
        console.log("window size", windowSize)
        console.log("right", right, "max", max)
        while((right - left + 1) > k){
            max -= numbers[left]
            left++

        }
        result = Math.max(result, max)
        right++
    }
    
    return result

}

const nums = [2, 1, 5, 1, 3, 2]
const k = 3
console.log(maximumSubArray(nums, k))
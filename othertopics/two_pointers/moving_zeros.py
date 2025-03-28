##
#Given an integer array nums, write a function to rearrange the array by moving all zeros to the end while keeping the order of non-zero elements unchanged. 
# Perform this operation in-place without creating a copy of the array.

#EXAMPLES
#Input:

#nums = [2,0,4,0,9]
#Output:

#[2,4,9,0,0]
#
#
class Solution:
    def moveZeroes(self, nums: list[int]):
        left = 0
        right = 0
        while left < len(nums) and right < len(nums) : 
            if nums[left] == 0 and nums[right] == 0:
                right += 1
            elif nums[left] == 0 and nums[right] != 0:
                nums[left] = nums[right]
                nums[right] = 0
                left += 1
            else:
                left += 1
                right += 1
                
        return nums

solution = Solution()
nums = [2,0,4,0,9]
solution.moveZeroes(nums)
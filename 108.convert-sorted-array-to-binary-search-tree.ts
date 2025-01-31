/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 *
 *  Definition for a binary tree node.
 **/
//  class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//       toString(){
//         return `${this.left} -> (${this.val}) -> ${this.right} `
//       }
//   }
 

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let left = 0
    let right = nums.length - 1
    // console.log(`left: ${left} | right: ${right} | nums: ${nums}`)
    if(nums === null || nums.length === 0)
        return null
    if(nums.length === 1)
        return new TreeNode(nums[0], null, null)

    const mid = Math.floor((left + right) / 2)
    
    return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(left, mid)), sortedArrayToBST(nums.slice(mid + 1, right + 1)))

};
const nums =[1, 3]
const tree = sortedArrayToBST(nums)
console.log(tree?.toString())
// @lc code=end


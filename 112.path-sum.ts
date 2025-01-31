/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {

    if (root == null)
        return false

    if (root == null && targetSum > 0)
        return false
    if (targetSum === root.val && (root.left == null && root.right == null))
        return true

    if (root.left) {
        const leftHasSum = hasPathSum(root.left, targetSum - root.val)
        if (leftHasSum)
            return true

    }
    if (root.right) {
        const rightHasSum = hasPathSum(root.right, targetSum - root.val)
        if (rightHasSum)
            return true

    }




    return false
};
// @lc code=end


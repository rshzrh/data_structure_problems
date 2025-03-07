/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null, min = -Infinity, max = Infinity): boolean {
    if (root === null)
        return true
    
    if(root.val >= max || root.val <= min)
        return false
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)

};
// @lc code=end


/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 **/
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.left = (left === undefined ? null : left)
//         this.right = (right === undefined ? null : right)
//     }
// }

function depth(root: TreeNode | null): number {
    if(root === null || root === undefined)
        return 0
    
    return 1 + Math.max(depth(root.left), depth(root.right))
}

function isBalanced(root: TreeNode | null): boolean {
    if(root === null || root === undefined)
        return true
    const leftDepth = depth(root?.left)
    const rightDepth = depth(root?.right)
    const diff = Math.abs(leftDepth - rightDepth)
    // console.log(`left: ${leftDepth} | right: ${rightDepth}`)
    if(diff > 1)
        return false
    
    return isBalanced(root.left) && isBalanced(root.right)
};
// @lc code=end


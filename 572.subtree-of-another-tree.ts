/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

function isSame(p: TreeNode | null, q: TreeNode | null): boolean{
    if(p === null && q === null)
        return true
    if(p != null && q != null && p.val === q.val)
        return isSame(p.left, q.left) && isSame(p.right, q.right)
    return false
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

    if(root === null)
        return false
    if(subRoot === null)
        return true

    
    if(isSame(root, subRoot))
        return true
    
    
    let left = false
    let right = false
    if(root != null && root.left != null)
        left = isSubtree(root.left, subRoot)
    if(root != null && root.right != null)
        right = isSubtree(root.right, subRoot)
    
    return left || right
};
// @lc code=end


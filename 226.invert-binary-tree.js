/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(root === null)
        return null

    if(root.left === null && root.right === null)
        return root

    const newRoot = new TreeNode(root.val)
    newRoot.left = invertTree(root.right)
    newRoot.right = invertTree(root.left)
    return newRoot
    
};
// @lc code=end


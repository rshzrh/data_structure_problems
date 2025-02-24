/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null)
        return true
    if(p !== null && q !== null && p.val === q.val)
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    return false
    
};

function isLeaf(node){
    return node.left === null && node.right === null
}
// @lc code=end


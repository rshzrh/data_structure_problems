/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null)
        return []
    
    const levels = {}

    const queue = [{node: root, level: 0}]
    while(queue.length > 0){
        const current = queue.shift()

        const node = current.node
        const level = current.level
        if(level in levels)
            levels[level].push(node.val)
        else
            levels[level] = [node.val]
        if(node.left !== null)
            queue.push({node: node.left, level: level + 1})
        if(node.right !== null)
            queue.push({node: node.right, level: level + 1})
    }
    return Object.values(levels)


    
};
// @lc code=end


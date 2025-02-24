/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */

var maxDepth = function(root) {

    if(root === null)
        return 0

    if(root.left === null && root.right === null)
        return 1

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    
};

var maxDepthBFS = function(root) {

    if(root === null)
        return 0

    const queue = [{node: root, depth: 1}]
    let maxDepth = 0
    while(queue.length > 0){
        const current = queue.shift()
        const node = current.node
        const depth = current.depth
        if(depth > maxDepth)
            maxDepth = depth

        if(node.left !== null)
            queue.push({node: node.left, depth: depth + 1})
        if(node.right != null)
            queue.push({node: node.right, depth: depth + 1})
    }

    return maxDepth
    
};
// @lc code=end


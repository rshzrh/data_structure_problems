/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {

    if(root === null)
        return []

    const result = {}

    const queue = [{node: root, level: 0}]
    while(queue.length > 0){
        const current = queue.shift()
        const node = current?.node
        const level = current?.level || 0

        if(level in result)
            result[level].push(node.val)
        else
            result[level] = [node.val]

        if(node.left != null)
            queue.push({node: node.left, level: level + 1})
        if(node.right != null)
            queue.push({node: node.right, level: level + 1})
    }


    return Object.values(result)
    
};
// @lc code=end


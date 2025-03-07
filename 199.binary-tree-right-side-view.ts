/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
    if(root === null)
        return []

    const levels = {}

    const queue = [{node: root, level: 0}]

    while(queue.length > 0){
        const current = queue.shift()

        const node = current?.node
        const level = current?.level || 0

        levels[level] = node.val

        if(node.left != null)
            queue.push({node: node.left, level: level + 1})
        if(node.right != null)
            queue.push({node: node.right, level: level + 1})
    }
    return Object.values(levels)
    
};
// @lc code=end


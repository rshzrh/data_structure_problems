/*
 * @lc app=leetcode id=1448 lang=typescript
 *
 * [1448] Count Good Nodes in Binary Tree
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

function explore(node: TreeNode | null, max: number){
    if(node === null)
        return 0

    let count = 0
    if(node.val >= max)
        count += 1
    
    max = Math.max(max, node.val)
    count += explore(node.left, max)
    count += explore(node.right, max)
    return count
}

function goodNodes(root: TreeNode | null): number {
    return explore(root, root.val)
};
// @lc code=end


/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null, max = -Infinity): number {
    let diameter:number = 0
    
    function depth(node: TreeNode | null): number{
        if(node === null)
            return 0
        const left = depth(node.left)
        const right = depth(node.right)

        diameter = Math.max(diameter, left + right)
        return 1 + Math.max(left, right)
    }
    depth(root) 
    return diameter
};
// @lc code=end


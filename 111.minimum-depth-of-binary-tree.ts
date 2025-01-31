/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 **/

 


function minDepth(root: TreeNode | null): number {
    if(root === null || root === undefined)
        return 0
    if(root.left === null)
        return 1 + minDepth(root.right)
    if(root.right === null)
        return 1 + minDepth(root.left)


    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
    
};
// @lc code=end


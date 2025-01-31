/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start


//   class TreeNode {
//       val: number
//       left: TreeNode | null
//       right: TreeNode | null
//       constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.left = (left===undefined ? null : left)
//           this.right = (right===undefined ? null : right)
//       }
//   }
 

function inorderTraversal(root: TreeNode | null): number[] {
    if(root === null)
        return []
    if(root.left == null && root.right == null)
        return [root.val]

    return inorderTraversal(root.left).concat(root.val).concat(inorderTraversal(root.right))
    
};
// @lc code=end


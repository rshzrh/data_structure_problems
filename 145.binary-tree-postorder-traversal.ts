/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 **/

  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


// left -> right -> root
function postorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = []
    if(root == null)
        return result

    if(root.left == null && root.right == null)
        return [root.val]

    result = result.concat(postorderTraversal(root.left))
    result = result.concat(postorderTraversal(root.right))
    result.push(root.val)

    return result
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null) , null))
console.log(root)
const result = postorderTraversal(root)
console.log(result)
// @lc code=end


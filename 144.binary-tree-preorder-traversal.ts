/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 **/
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
 

function preorderTraversalRecursive(root: TreeNode | null): number[] {
    if(root == null)
        return []
    
    if(root.left == null && root.right == null)
        return [root.val]
    
    let result: number[] = []
    result = result.concat([root.val])
    result = result.concat(preorderTraversal(root.left))
    result = result.concat(preorderTraversal(root.right))
    
    return result
};

function preorderTraversal(root: TreeNode | null): number[] {
    const stack:TreeNode[] = []
    const result: number[] = []
    if(root == null)
        return []

    stack.push(root)
    while(stack.length > 0){
        const current = stack.pop()
        result.push(current?.val)
        if(current?.right)
            stack.push(current.right)
        if(current?.left)
            stack.push(current.left)

    }
    return result
    
}

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null) , null))
console.log(root)
const numbers = preorderTraversal(root)
console.log(numbers)
// @lc code=end


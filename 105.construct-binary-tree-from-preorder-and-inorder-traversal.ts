/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    // console.log("preorder", preorder)
    // console.log("inorder", inorder)

    if (preorder.length === 0 || inorder.length === 0)
        return null

    const rootVal = preorder[0]
    const rootIndexInInOrder = inorder.indexOf(rootVal)

    const inOrderLeft = inorder.slice(0, rootIndexInInOrder)
    const inOrderRight = inorder.slice(rootIndexInInOrder + 1)

    const preOrderLeft = preorder.slice(1, 1 + inOrderLeft.length)
    const preOrderRight = preorder.slice(1 + inOrderLeft.length)

    const root = new TreeNode(rootVal)
    root.left = buildTree(preOrderLeft, inOrderLeft)
    root.right = buildTree(preOrderRight, inOrderRight)
    return root


};
// @lc code=end

const preorder = [-1]
const inorder = [-1]
const result = buildTree(preorder, inorder)
console.log(result)
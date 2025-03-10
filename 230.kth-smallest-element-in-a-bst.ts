/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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
    toString(): string{
        return `${this.left} -> (${this.val} <- ${this.right})`
    }
}


function kthSmallest(root: TreeNode | null, k: number): number {

    let counter:number = 0
    let smallest: number = 0

    function explore(root: TreeNode | null){
        if(root == null)
            return

        if(root.left !== null)
            explore(root.left)
        counter++
        // console.log(counter, root.val)
        if(counter === k){
            smallest = root.val
            return
        }
        if(root.right !== null)
            explore(root.right)    

    }
    explore(root)
    return smallest

};
// @lc code=end

const five = new TreeNode(5)
const one = new TreeNode(1)
const two = new TreeNode(2)
const three = new TreeNode(3)
const four = new TreeNode(4)
const six = new TreeNode(6)

two.left = one
three.left = two
three.right = four
five.left = three
five.right = six

const result = kthSmallest(five, 3)
console.log(result)



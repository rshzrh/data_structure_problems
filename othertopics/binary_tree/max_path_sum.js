/***
 * max root to leaf path sum
 * Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
 * The function should return the maximum sum of any root to leaf path within the tree.
 * You may assume that the input tree is non-empty.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxPathSum = (root) => {
  if (root === null) return -Infinity;
  if(root.left === null && root.right === null)
    return root.val
  
  const leftSum = maxPathSum(root.left)
  const rightSum = maxPathSum(root.right)
  console.log(`${leftSum} -> ${root.val} <- ${rightSum}`)
  return root.val + Math.max(leftSum, rightSum);
};

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(-13);
const g = new Node(-1);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   0    -13
//     /       \
//    -1       -2

console.log(maxPathSum(a)); // -> -8

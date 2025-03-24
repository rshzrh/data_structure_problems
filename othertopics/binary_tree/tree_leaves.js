/**
 * Write a function, leafLayers, that takes in the root of a binary tree. The function should return a 2D array where each subarray represents a "leaf layer" of the tree.

To get a leaf layer, take all leaf nodes in tree. Then, conceptually "remove" them from the tree. This will create new "leaves". Repeat this process until the tree is empty.

You don't need to actually delete the nodes from the tree, just return the array of layers.

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const i = new Node("i");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

leafLayers(a); // ->
// [
//   ['d', 'g', 'h', 'i'],
//   ['e', 'f'],
//   ['b', 'c'],
//   ['a'],
// ]


 */

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
 
 const leafLayers = (root) => {
   const levels = {}
   traverse(root, levels)
   const layers = Object.values(levels)
   return layers
 };
 
 function traverse(root, levels){
   if(root === null)
     return -1
 
   const leftHeight = traverse(root.left, levels)
   const rightHeight = traverse(root.right, levels)
   console.log(root.val, leftHeight, rightHeight)
   const height = 1 + Math.max(leftHeight, rightHeight)
   console.log(root.val, '->', height)
   if(height in levels)
     levels[height].push(root.val)
   else
     levels[height] = [root.val]
   return height
 }
 
 module.exports = {
   leafLayers,
 };
 
 const a = new Node("a");
 const b = new Node("b");
 const c = new Node("c");
 const d = new Node("d");
 const e = new Node("e");
 const f = new Node("f");
 const g = new Node("g");
 const h = new Node("h");
 const i = new Node("i");
 
 a.left = b;
 a.right = c;
 b.left = d;
 b.right = e;
 c.right = f;
 e.left = g;
 e.right = h;
 f.left = i;
 
 const result = leafLayers(a); // ->
 console.log(result)
 
/**
 * Write a function, allTreePaths, that takes in the root of a binary tree.
 * The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
 * The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.
 * You may assume that the input tree is non-empty.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const allTreePaths = (root) => {
    if(root === null)
        return []
  if(root.left ===  null && root.right === null){
    return [[root.val]]
  }

  let leftPath = allTreePaths(root.left)
  leftPath.map((path) => {
    path.unshift(root.val)
  })
  
  
  let rightPath = allTreePaths(root.right)
  rightPath.map((path) => {
    path.unshift(root.val)
  })
  return [...leftPath, ...rightPath]
};

const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');
const v = new Node('v');

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \ 
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

console.log(allTreePaths(q)); // ->
// [ 
//   [ 'q', 'r', 't', 'u', 'v' ], 
//   [ 'q', 's' ] 
// ] 



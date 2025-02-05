/***
 * Write a function, treeLevels, that takes in the root of a binary tree.
 * The function should return a 2-Dimensional array where each subarray represents a level of the tree.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeLevels = (root) => {
  if(root === null)
    return []
  if(root.left === null && root.right === null)
    return [[root.val]]

  let levels = {}
  
  const stack = [{"node": root, "level": 0}]

  while(stack.length > 0){
    const current = stack.pop()
    const node = current["node"]
    const level = current['level']
    if(level in levels){
        levels[level].push(node.val)
    }else{
        levels[level] = [node.val]
    }
    if(node.left != null) stack.push({"node": node.left, "level": level + 1})
    if(node.right != null) stack.push({"node": node.right, "level": level + 1})
  }

  const result = []
  for(let key in levels){
    result.push(levels[key].reverse())
  }
  return result

};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(treeLevels(a)); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]

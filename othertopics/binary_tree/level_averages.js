/***
 * Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
 * The function should return an array containing the average value of each level.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const levelAverages =  (root) => {
  
    if(root === null)
        return null
    if(root.left === null && root.right === null)
        return root.val

    const stack = [{node: root, level: 0}]
    const levels = []
    while(stack.length > 0){
        const current = stack.pop()
        const node = current.node
        const level = current.level

        if(level < levels.length){
            levels[level].sum += node.val
            levels[level].count += 1
        }else{
            levels.push({sum: node.val, count: 1})
        }
        if(node.left != null) stack.push({node: node.left, level: level + 1})
        if(node.right != null) stack.push({node: node.right, level: level + 1})
    }

    const result = []
    for(let level of levels){
        console.log(level)
        result.push(level.sum / level.count)
    }
    return result
};

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]

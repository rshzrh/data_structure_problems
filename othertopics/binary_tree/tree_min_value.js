class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeMinValue = (root) => {
  const queue = [root];
  let min = Number.MAX_SAFE_INTEGER;
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val < min) min = current.val;
    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }
  return min;
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

console.log(treeMinValue(a)); // -> -2

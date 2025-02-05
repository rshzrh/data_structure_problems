class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  toString() {
    return `${this.val}`;
  }
}

const depthFirstValues = (root) => {
  if (root === null) return null;
//   console.log(root);
  let result = [root.val];
  const left = depthFirstValues(root.left);
  if (left) result = result.concat(left);

  const right = depthFirstValues(root.right);
  if (right) result = result.concat(right);

  return result;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.right = b;
b.left = c;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

console.log(depthFirstValues(a)); //    -> ['a', 'b', 'c', 'd', 'e']

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const treeValueCount = async(root, target) => {
  if (root === null) return 0;

  const queue = [root];
  let counter = 0;
  
  while (queue.length > 0) {
    
    console.log("before: ", queue.length)
    const current = queue.shift();
    console.log("after: ", queue.length)

    console.log(current.val)
    await new Promise(r => setTimeout(r, 200));
    if (current.val === target) {
        counter++
    }
    console.log("counter: ", counter)
    if (current.left != null){
        console.log("adding left tree")
        queue.push(current.left);
    }  
    if (current.right != null) {
        console.log("adding right tree")
        queue.push(current.right);
    }
  }
  return counter;
};

const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12 (a)
//    /   \
//   6(b)     6(c)
//  / \        \
// 4(d) 6(e)     12 (f)

console.log(treeValueCount(a, 6)); // -> 3

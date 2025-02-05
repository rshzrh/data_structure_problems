class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    return `${this.val} -> ${this.next}`;
  }
}

const insertNode = (head, value, index) => {
  let currentIndex = 0;
  let current = head;

  if(index === 0){
    const newNode = new Node(value)
    newNode.next = head
    return newNode
  }
  while (current != null) {
    if (currentIndex === index - 1) {
      const newNode = new Node(value);
      newNode.next = current.next;
      current.next = newNode;
      break;
    }
    current = current.next;
    currentIndex++;
  }
  return head
};

const a = new Node("a");
const b = new Node("b");


a.next = b;

// a -> b -> c -> d

const head = insertNode(a, "z", 0);
console.log(head.toString());
// a -> b -> x -> c -> d

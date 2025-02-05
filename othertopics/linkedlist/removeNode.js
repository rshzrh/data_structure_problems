class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    return `${this.val} -> ${this.next}`;
  }
}

const removeNode = (head, targetVal) => {
  
    if(head.val === targetVal)
        return head.next

    let prev = head
    let current = head

  while (current != null) {
    if (current.val === targetVal) {
        
      prev.next = current.next
      break;
    }

    prev = current
    current = current.next
    
  }
  return head
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const result = removeNode(a, "c");
console.log(result.toString());

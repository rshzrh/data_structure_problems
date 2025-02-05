class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString(){
    return `${this.val} -> ${this.next}`
  }
}

const createLinkedList = (values) => {
  if (values === null || values.length === 0) return null;
  let dummy = new Node(null);
  let head = dummy
  for(let num of values){
    console.log("head: ", head.toString())
    const newNode = new Node(num)
    head.next = newNode
    head = newNode
  }

  return dummy.next;
};

console.log(createLinkedList(["h", "e", "y"]).toString()); // h -> e -> y
console.log(createLinkedList([1, 7, 1, 8]).toString()); // 1 -> 7 -> 1 -> 8
console.log(createLinkedList(["a"]).toString()); // a
console.log(createLinkedList([])); // null

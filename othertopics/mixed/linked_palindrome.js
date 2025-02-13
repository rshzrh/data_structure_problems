/***
 * Write a function, linkedPalindrome, that takes in the head of a linked list as an argument.
 * The function should return a boolean indicating whether or not the linked list is a palindrome.
 * A palindrome is a sequence that is the same both forwards and backwards.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    return `${this.val} -> ${this.next}`;
  }

}

const linkedPalindrome = (head) => {
  if (head === null || head.next === null) return true;

    const items = []
    while(head != null){
        items.push(head.val)
        head = head.next
    }
    console.log(items)
    for(let i = 0; i < items.length; i++){
        if(items[i] !== items[items.length - 1 - i])
            return false
    }
    return true
};


const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(linkedPalindrome(a)); // true

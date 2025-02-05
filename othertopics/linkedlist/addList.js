/***
 * Write a function, addLists, that takes in the head of two linked lists, each representing a number. 
 * The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. 
 * The function should return the head of a new linked listed representing the sum of the input lists. 
 * The output list should have its digits reversed as well.
 * You must do this by traversing through the linked lists once.
 * Say we wanted to compute 621 + 354 normally. The sum is 975:

   621
 + 354
 -----
   975

Then, the reversed linked list format of this problem would appear as:

    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9

 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString(){
    return `${this.val} -> ${this.next}`
  }
}

const addLists = (head1, head2) => {
  let head = new Node(null)
  let current = head
  let remainder = 0
  while(head1 != null || head2 != null){
    let sum = remainder
    if(head1)
        sum += head1.val
    if(head2)
        sum += head2.val

    let digit = sum >= 10 ? sum - 10 : sum
    remainder = sum >= 10 ? Math.floor(sum / 10) : 0

    if(head1)
    console.log("head1.val: ", head1.val)
    if(head2)
    console.log("head2.val: ", head2.val)
    console.log("digit: ", digit)
    console.log("remainder: ", remainder)
    

    head.next = new Node(digit)
    head = head.next

    if(head1)
        head1 = head1.next
    if(head2)
        head2 = head2.next
  }
  if(remainder > 0){
    head.next = new Node(remainder)
  }
  console.log("head: ", head.toString())
  console.log("current: ", current.toString())
  return current.next
};

//   89
// + 47
// ----
//  136

const a1 = new Node(9);
const a2 = new Node(8);
a1.next = a2;
// 9 -> 8

const b1 = new Node(7);
const b2 = new Node(4);
b1.next = b2;
// 7 -> 4
console.log(addLists(a1, b1).toString())

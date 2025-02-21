/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */

// class ListNode {
//     constructor(val, next){
//         this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//     }
//     toString(){
//         return `${this.val} -> ${this.next}`
//     }
      
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null)
    return null

  let prev = null
  let current = head
  while(current !== null){

    let next = current.next
    // console.log("prev", prev)
    // console.log("current", current.toString())
    // console.log("next", next)
    
    
    current.next = prev
    prev = current
    current = next

  }
  return prev
};
// @lc code=end

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(head.toString())
const rev = reverseList(head)
console.log(rev.toString())

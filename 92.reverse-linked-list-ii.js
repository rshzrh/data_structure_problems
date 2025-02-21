/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toString() {
    return `${this.val} -> ${this.next}`;
  }
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

    if(head ===  null || left === right)
        return head

    const dummy = new ListNode(0, head)
    
    let prev = dummy

    for(let i = 0; i < left - 1; i++){
        prev = prev.next
    }

    let current = prev.next
    let tail = current
    const count = right - left + 1
    for(let i = 0; i < count; i++){
      const next = current.next

      current.next = prev.next
      prev.next = current
      current = next

    }
    tail.next = current
    return dummy.next

};
// @lc code=end

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

const newhead = reverseBetween(head, 2, 4);
console.log(newhead.toString())

/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */


  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
      toString(){
        return `${this.val} -> ${this.next}`
      }
  }
 

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null)
        return null

    let prev: ListNode | null = null
    let current: ListNode | null = head

    while(current != null){
        let next = current.next

        current.next = prev
        prev = current
        current = next
    }
    return prev

};
// @lc code=end

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(head.toString())
const newHead = reverseList(head)
console.log(newHead?.toString())

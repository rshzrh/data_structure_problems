/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
**/
// class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//   }
 

function hasCycleMap(head: ListNode | null): boolean {
   const visit:Map<ListNode, number> = new Map<ListNode, number>()

   while(head){
    if(visit.has(head)){
        visit.clear()
        return true
    }        
    visit.set(head, 1)
    head = head.next
   }
   visit.clear()
   return false
};

function hasCycle(head: ListNode | null): boolean {
    if(head == null)
        return false
    let slow = head
    let fast = head.next
    while(slow){
        if(slow === fast)
            return true
        if(fast == null || fast.next == null || fast.next.next ==  null)
            return false
        slow = slow.next
        fast = fast.next.next
    }
    return false
 };
// @lc code=end


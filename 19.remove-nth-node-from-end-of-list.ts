/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    toString() {
        return `${this.val} -> ${this.next}`
    }
}


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

    
    let end = head
    for(let i = 0; i < n; i++)
        end = end.next
    
    let dummy = new ListNode(0, head)
    let start = dummy

    // console.log("start", start?.toString())

    while(end != null){
        // console.log("start", start?.toString())
        // console.log("end", end.toString())
        
        end = end.next
        start = start.next
    }
    // console.log("final start", start?.toString())
    // console.log("final end", end?.toString())
    if(start.next != null)
        start.next = start?.next.next

    return dummy.next
};
// @lc code=end

// const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
const node = new ListNode(1, new ListNode(2))
console.log(node.toString())
const newHead = removeNthFromEnd(node, 2)
console.log(newHead?.toString())
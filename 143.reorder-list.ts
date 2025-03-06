/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {

    if (head === null)
        return

    let slow: ListNode | null = head
    let fast: ListNode | null = head.next

    while (slow != null && fast != null && fast.next != null) {

        slow = slow.next
        fast = fast.next.next
    }
    // console.log("slow", slow?.toString())
    let prev: ListNode | null = null
    let current = slow
    while(current != null){
        let next = current.next

        current.next = prev
        prev = current
        current = next
    }
    let l1 = head
    let l2 = prev

    // console.log("l1", l1.toString())
    // console.log("l2", l2?.toString())

    while(l1 != null && l2 != null){

        // console.log("l1", l1.toString())
        // console.log("l2", l2.toString())
        let l1Next = l1.next
        let l2Next = l2.next

        l1.next = l2
        l2.next = l1Next

        l1 = l1Next
        l2 = l2Next
    }
    // console.log(head.toString())
    


};
// @lc code=end

const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
// console.log(node.toString())
reorderList(node)
console.log(node.toString())


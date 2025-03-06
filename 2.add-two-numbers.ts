/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 */
/*
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
*/

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    const head = new ListNode(0)
    let current = head

    let carry = 0

    while(l1 != null || l2 != null){
        let sum = carry
        if(l1 !== null)
            sum += l1.val
        if(l2 !== null)
            sum += l2.val

        const digit = sum % 10
        carry = (sum - digit) / 10
        const node = new ListNode(digit)
        current.next = node

        current = current.next
        if(l1 != null)
            l1 = l1.next
        if(l2 != null)
            l2 = l2.next
    }
    if(carry > 0){
        current.next = new ListNode(carry)
    }

    return head.next

};

function reverseList(head: ListNode | null): ListNode | null{
    if(head === null)
        return null

    let prev: ListNode | null = null
    let current: ListNode | null = head

    while(current != null){
        const next = current.next

        current.next = prev
        prev = current
        current = next


    }
    return prev
}



// @lc code=end

// const node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
// console.log(node.toString())
// const reverseNode = reverseList(node)
// console.log(reverseNode?.toString())

const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
const l2 = new ListNode(9, new ListNode(9, new ListNode(9)))
const sum = addTwoNumbers(l1, l2)
console.log(sum?.toString())
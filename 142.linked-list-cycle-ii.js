/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// class ListNode{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null)
        return null

    const map = new Set()
    while(head != null){
        if(head.next != null && map.has(head.next))
            return head.next
        map.add(head)
        head = head.next
    }
    return null
    
};
// @lc code=end

a = new ListNode(3)
b = new ListNode(2)
c = new ListNode(0)
d = new ListNode(-4)

a.next = b
b.next = c
c.next = d
d.next = b

const node = detectCycle(a)
console.log(node.val)
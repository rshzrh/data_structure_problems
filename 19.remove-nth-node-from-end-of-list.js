/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    toString(){
        return `${this.val} -> ${this.next}`
    }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let first = dummy
    let second = dummy

    for(let i = 0; i <= n; i++)
        first = first.next

    while(first != null){
        first = first.next
        second = second.next
    }
    second.next = second.next.next
    return dummy.next
};
// @lc code=end

head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
newhead = removeNthFromEnd(head, 2)
// head = new ListNode(1)
// newhead = removeNthFromEnd(head, 1)

console.log(newhead)
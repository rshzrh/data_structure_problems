/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null)
        return false

    let slow = head
    let fast = head.next

    while(fast != null && fast.next !== null){
        if(fast === slow)
            return true
        slow = slow.next
        fast = fast.next.next
    }
    return false
};
// @lc code=end


/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindromeWithArray = function(head) {

    const numbers = []

    while(head != null){
        numbers.push(head.val)
        head = head.next
    }
    // console.log(numbers)
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] !== numbers[numbers.length - i - 1])
            return false
    }
    return true
    
};

var isPalindrome = function(head){
    if(head === null || head.next === null)
        return true

    let slow = head
    let fast = head
    while(fast != null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null
    while(slow != null){
        // console.log("slow", slow.toString())
        const next = slow.next
        slow.next = prev
        prev = slow
        slow = next
    }
    // console.log("first", head.toString())
    // console.log("second", prev.toString())
    while(prev != null){
        if(head === null)
            return false
        if(prev.val !== head.val)
            return false
        prev = prev.next
        head = head.next
    }

    return true
}
// @lc code=end

head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
console.log(isPalindrome(head))
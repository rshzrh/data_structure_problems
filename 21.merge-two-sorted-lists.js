/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  toString(){
    return `${this.val} -> ${this.next}`
  }
}
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;

  if (list1 === null && list2 != null) return list2;
  if (list1 !== null && list2 === null) return list1;

  let head = new ListNode(0);
//   console.log(head)
  const dummy = head;

  while (list1 != null && list2 != null) {
    // console.log("head", head.toString())
    if (list1.val < list2.val) {
      head.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      head.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    head = head.next;
  }
  if (list1 != null) head.next = list1;
  if (list2 != null) head.next = list2;

  return dummy.next;
};
// @lc code=end

list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

const head = mergeTwoLists(list1, list2)
console.log(head.toString())
/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start

 
//   class ListNode {
//       val: number
//       next: ListNode | null
//       constructor(val?: number, next?: ListNode | null) {
//           this.val = (val===undefined ? 0 : val)
//           this.next = (next===undefined ? null : next)
//       }
//       toString(){
//         return `${this.val} -> ${this.next}`
//       }
//   }
 

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null)
        return null
    let newHead = new ListNode(head?.val)
    const result = newHead
    head = head?.next
    // console.log(`new Head: ${newHead}`)
    
    while(head != null){
        // console.log(`head: ${head}`)
        if(head.val != newHead?.val){
            // console.log(`adding new node: ${head}`)
            newHead.next = new ListNode(head.val)
            newHead = newHead?.next
        }
        head = head.next
    }

    return result
};
// @lc code=end


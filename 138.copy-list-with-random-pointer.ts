/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for _Node.
 * 
 */
class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
        this.random = (random === undefined ? null : random)
    }
}



function copyRandomList(head: _Node | null): _Node | null {
    if(head === null)
        return null

    const newHead = new _Node(head.val)
    while(head !== null){
        
    }

};
// @lc code=end


const seven = new _Node(7)
const thirteen = new _Node(13)
const eleven = new _Node(11)
const ten = new _Node(10)
const one = new _Node(1, undefined, seven)

seven.next = thirteen

thirteen.next = eleven
thirteen.random = seven

eleven.next = ten
eleven.random = one

ten.next = one
ten.random = eleven

console.log(seven)



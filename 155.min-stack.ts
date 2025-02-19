/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
    
    stack: [number, number][] = []

    constructor() {
        
    }

    push(val: number): void {
        let minVal = this.getMin()
        if(minVal === null || val < minVal)
            minVal = val
        this.stack.push([val, minVal])
    }

    pop(): void {
        this.stack.pop()
            
    }

    top(): number {
        return this.stack[this.stack.length - 1][0]
    }

    getMin(): number {
        return this.stack.length ? this.stack[this.stack.length - 1][1] : null
    }
    
    toString(): String {
        return `min: ${this.getMin()} | stack: ${this.stack}`
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

let minStack:MinStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack)

console.log(minStack.getMin())
minStack.pop()
console.log(minStack)

console.log(minStack.getMin())
minStack.pop()
console.log(minStack)

console.log(minStack.getMin())
minStack.pop()
console.log(minStack)

console.log(minStack.getMin())
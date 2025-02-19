/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
    stack1: number[] = []
    stack2: number[] = []
    constructor() {
        
    }

    push(x: number): void {
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(x)
        while(this.stack2.length > 0){
            this.stack1.push(this.stack2.pop())
        }
    }

    pop(): number {
        return this.stack1.pop()
        
    }

    peek(): number {
        return this.stack1[this.stack1.length - 1]
    }

    empty(): boolean {
        return this.stack1.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 **/
 var obj = new MyQueue()
  obj.push(10)
  var param_2 = obj.pop()
//   console.log(param_2)
  var param_3 = obj.peek()
//   console.log(param_3)
  var param_4 = obj.empty()
//   console.log(param_4)

// @lc code=end


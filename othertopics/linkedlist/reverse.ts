class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    toString(){
        return `${this.val} -> ${this.next}`
    }
}

const reverseList = (head) => {
    let current = head
    let prev = null
    while (current != null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
        if(current == null){
            head = prev
            return prev
        }
    }

};

const a = new ListNode("a");
const b = new ListNode("b");
const c = new ListNode("c");
const d = new ListNode("d");
const e = new ListNode("e");
const f = new ListNode("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

console.log(reverseList(a));

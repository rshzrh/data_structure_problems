class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    toString(){
        return `${this.val} -> ${this.next}`
    }
}

const zipperLists = (head1, head2) => {

    const newHead = head1
    
    while(head1 != null && head2 != null){
        let head1Next = head1.next
        let head2Next = head2.next    
        
        if(head2 != null)
            head1.next = head2
        if(head1Next != null)
            head2.next = head1Next

        head1 = head1Next
        head2 = head2Next
        
    }


    return newHead
};

const s = new ListNode("s");
const t = new ListNode("t");
s.next = t;
// s -> t

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4



// s -> 1 -> t -> 2 -> 3 -> 4
const newHead = zipperLists(s, one);
console.log(newHead.toString())


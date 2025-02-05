class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const longestStreak = (head) => {
  let longest = 0;
  
  let lastSeenChar = ""
  let lastStreak = 0
     
  while (head != null) {
    const currentChar = head.val
    if(currentChar === lastSeenChar){
        lastStreak++
    }else{
        if(lastStreak > longest)
            longest = lastStreak
        lastStreak = 1
        lastSeenChar = currentChar
    }
    head = head.next;
  }
  if(lastStreak > longest)
    longest = lastStreak

  return longest;
};

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);
const g = new Node(6);
const h = new Node(6);
const i = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
h.next = i;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

console.log(longestStreak(a)); // 3

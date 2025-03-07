/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start


class DoubleListNode {
    val: number;
    next: DoubleListNode | null = null;
    prev: DoubleListNode | null = null;

    constructor(val: number) {
        this.val = val;
    }
}

class LRUCache {
    private map: Map<number, number>;
    private nodeAddresses: Map<number, DoubleListNode>;
    private usageHead: DoubleListNode;
    private usageTail: DoubleListNode;
    private capacity: number;

    constructor(capacity: number) {
        this.map = new Map<number, number>();
        this.nodeAddresses = new Map<number, DoubleListNode>();
        this.capacity = capacity;
        this.usageHead = new DoubleListNode(-1); // Sentinel node
        this.usageTail = new DoubleListNode(-1); // Sentinel node
        this.usageHead.next = this.usageTail;
        this.usageTail.prev = this.usageHead;
    }

    private removeNode(node: DoubleListNode): void {
        const prevNode = node.prev;
        const nextNode = node.next;
        if (prevNode) prevNode.next = nextNode;
        if (nextNode) nextNode.prev = prevNode;
    }

    private addNodeToFront(node: DoubleListNode): void {
        const firstNode = this.usageHead.next;
        this.usageHead.next = node;
        node.prev = this.usageHead;
        node.next = firstNode;
        if (firstNode) firstNode.prev = node;
    }

    private moveToHead(node: DoubleListNode): void {
        this.removeNode(node);
        this.addNodeToFront(node);
    }

    private evictTailNode(): void {
        const toRemove = this.usageTail.prev;
        if (toRemove && toRemove !== this.usageHead) {
            this.removeNode(toRemove);
            this.map.delete(toRemove.val);
            this.nodeAddresses.delete(toRemove.val);
        }
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;
        const node = this.nodeAddresses.get(key)!;
        this.moveToHead(node);
        return this.map.get(key)!;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const node = this.nodeAddresses.get(key)!;
            this.map.set(key, value);
            this.moveToHead(node);
        } else {
            if (this.map.size >= this.capacity) {
                this.evictTailNode();
            }
            const newNode = new DoubleListNode(key);
            this.map.set(key, value);
            this.nodeAddresses.set(key, newNode);
            this.addNodeToFront(newNode);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const cache = new LRUCache(2);
console.log(cache.get(2))
cache.put(2, 6)
console.log(cache.get(1))
cache.put(1, 5)
cache.put(1, 2)
console.log(cache.get(1))
console.log(cache.get(2))

/*
 * @lc app=leetcode id=133 lang=typescript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * Definition for _Node.
 */

/*
class _Node {
    val: number
    neighbors: _Node[]

    constructor(val?: number, neighbors?: _Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}
*/



function cloneGraph(node: _Node | null): _Node | null {
    if (node === null)
        return null

    const oldToNew: Map<_Node, _Node> = new Map<_Node, _Node>()
    oldToNew.set(node, new _Node(node.val))
    const queue:_Node[] = [node]

    while(queue.length > 0){

        const old = queue.shift()
        for(let neighbor of old?.neighbors){
            if(!oldToNew.has(neighbor)){
                let newNeighbor = new _Node(neighbor.val)
                oldToNew.set(neighbor, newNeighbor)
                queue.push(neighbor)
            }
            oldToNew.get(old)?.neighbors.push(oldToNew.get(neighbor))
        }

    }
    // console.log(oldToNew)
    return oldToNew.get(node)


};
// @lc code=end

const one = new _Node(1)
const two = new _Node(2)
const three = new _Node(3)
const four = new _Node(4)

one.neighbors.push(two)
one.neighbors.push(four)

two.neighbors.push(one)
two.neighbors.push(three)

three.neighbors.push(two)
three.neighbors.push(four)


four.neighbors.push(one)
four.neighbors.push(three)

const root = cloneGraph(one)
console.log(root)
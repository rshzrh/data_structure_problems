/**
 * Write a function that takes in the adjacency list for a weighted graph and two nodes, src and dst. The function should return the minimum cost path that travels from src to dst.

The cost of a path is the sum of the weights of edges traveled.

You can assume that the weights are non-negative numbers and there is at least one path between src and dst.
 */

class MinHeap{
  
    constructor(){
      this.array = []
      console.log("array", this.array)
    }
    insert(node){
      const val = node.val
      const name = node.name
      console.log("insert.array", this.array)
      this.array.push(node)
      this.levelUp(this.array.length - 1)
    }
    levelUp(index){
      if(index === 0)
        return
      let parentIndex = Math.floor((index - 1) / 2)
      const child = this.array[index]
      const parent = this.array[parentIndex]
      if(parent.val > child.val){
        [this.array[index], this.array[parentIndex]] = [this.array[parentIndex], this.array[index]]
        this.levelUp(parentIndex)
      }
    }
    extract(){
      const min = this.array.shift()
      this.levelDown(0)
      return min
    }
    levelDown(index){
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      
      const parent = this.array[index]
      const leftChild = (leftChildIndex > this.array.length - 1) ? null : this.array[leftChildIndex]
      const rightChild = (rightChildIndex > this.array.length - 1) ? null : this.array[rightChildIndex]
  
      let minChildIndex = leftChildIndex
      let minChild = leftChild
      if(rightChild !== null && rightChild.val < minChild.val){
        minChild = rightChild
        minChildIndex = rightChildIndex
      }
      if(minChild !== null && minChild.val < parent.val){
        [this.array[index], this.array[minChildIndex]] = [this.array[minChildIndex], this.array[index]]
        this.levelDown(minChildIndex)
        
      }
    }
    status(){
      console.log(this.array)
    }
    size(){
      return this.array.length
    }
  }
  
  const weightedGraphMinPath = (graph, src, dst) => {
    const heap = new MinHeap()
    heap.insert({name: src, val: 0})
    while(heap.size() > 0){
      // heap.status()
      const node = heap.extract()
      const name = node.name
      const distance = node.val
      if(name === dst)
        return distance
      for(let neighbor in graph[name]){
        const newNode = {name: neighbor, val: distance + graph[name][neighbor]}
        heap.insert(newNode)
      }
    }
    return -1
  };
  
  /*
  const heap = new MinHeap()
  heap.insert({name: 'a', val: 2})
  heap.insert({name: 'b', val: 5})
  heap.insert({name: 'c', val: 1})
  heap.status()
  console.log(heap.extract())
  heap.insert({name: 'd', val: 7})
  heap.insert({name: 'e', val: 0})
  heap.status()
  console.log(heap.extract())
  heap.status()
  heap.insert({name: 'f', val: 4})
  heap.status()
  */
  
  const graph = {
    x: {q: 1, e: 10 },
    b: {e: 7, q: 8 },
    q: {x: 1, b: 8 },
    e: {b: 7, x: 10 },
  };
  
  const distance = weightedGraphMinPath(graph, 'b', 'x');
  console.log(distance)
  module.exports = {
    weightedGraphMinPath,
  };
  
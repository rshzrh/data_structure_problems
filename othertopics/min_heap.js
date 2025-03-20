class MinHeap {
    constructor() {
      this.array = [];
    }
  
    isEmpty() {
      return this.array.length === 0;
    }
  
    size() {
      return this.array.length;
    }
  
    swap(idx1, idx2) {
      [this.array[idx1], this.array[idx2]] = [this.array[idx2], this.array[idx1]];
    }
  
    siftUp(idx) {
      let currentIdx = idx;
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
        if (this.array[currentIdx] < this.array[parentIdx]) {
          this.swap(currentIdx, parentIdx);
          currentIdx = parentIdx;
        } else {
          break;
        } 
      }
    }
  
    insert(val) {
      this.array.push(val);
      this.siftUp(this.size() - 1);
    }
  
    siftDown(index){
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
  
      let left = leftChildIndex < this.array.length ? this.array[leftChildIndex] : Infinity
      let right = rightChildIndex < this.array.length ? this.array[rightChildIndex] : Infinity
      
      let minIndex = leftChildIndex
      let min = left
      if(right < left){
        minIndex = rightChildIndex
        min = right
      }
      if(min < this.array[index]){
        this.swap(index, minIndex)
        this.siftDown(minIndex)
      }
      
      
    }
  
    extractMin() {
      if(this.size() === 0)
        return null
      const value = this.array.shift()
      if(this.size() > 0){
        const last = this.array.pop()
        this.array.unshift(last)
        this.siftDown(0)
      }
      return value
    }
  }
  
  module.exports = {
    MinHeap,
  };
  
  const heap = new MinHeap();
  heap.insert(12);
  heap.insert(13);
  heap.insert(11);
  heap.insert(4);
  heap.insert(20);
  heap.insert(9);
  heap.insert(22);
  heap.insert(14);
  console.log(heap.extractMin()); // -> 4
  console.log(heap.extractMin()); // -> 9
  console.log(heap.extractMin()); // -> 11
  
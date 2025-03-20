
class MinHeap{
    constructor(){
      this.array = []
    }
    siftUp(index){
      if(index === 0)
        return
  
      let parentIndex = Math.floor((index - 1) / 2)
      if(this.array[parentIndex] > this.array[index]){
        [this.array[parentIndex], this.array[index]] = [this.array[index], this.array[parentIndex]]
        this.siftUp(parentIndex)
      }
    }
    insert(val){
      const newVal = val
      this.array.push(newVal)
      let index = this.array.length - 1
      this.siftUp(index)  
    }
  
    siftDown(index){
  
      let leftIndex = 2 * index + 1
      let rightIndex = 2 * index + 2
  
      let left = leftIndex >= this.array.length ? Infinity : this.array[leftIndex]
      let right = rightIndex >=  this.array.length ? Infinity : this.array[rightIndex]
  
      let minIndex = leftIndex
      let min = left
      if(right < left){
        minIndex = rightIndex
        min = right
      }
  
      if(min < this.array[index]){
        [this.array[minIndex], this.array[index]] = [this.array[index], this.array[minIndex]]
        this.siftDown(minIndex)
      }
      
    }
    extract(){
      if(this.array.length === 0)
        return null
      const value = this.array.shift()
      if(this.array.length > 0){
        const last = this.array.pop()
        this.array.unshift(last)
        this.siftDown(0)
      }
      
  
      return value
      
    }
    size(){
      return this.array.length
    }
    status(){
      console.log(this.array)
    }
  }
  
  const kthLargest = (numbers, k) => {
    const heap = new MinHeap()
    
    for(let num of numbers){
      heap.insert(num)
      
      if(heap.size() > k)
        heap.extract()
      heap.status()
    }
    let result = heap.extract()
    console.log('result', result)
    return result
    // heap.status()
  };
  
  module.exports = {
    kthLargest,
  };
  
  
  kthLargest([9,2,6,6,1,5,8,7], 3); // -> 7
const mergeSort = (nums) => {


    if(nums.length === 0)
      return []
    if(nums.length === 1)
      return nums
    
    const halfIndex = Math.floor(nums.length / 2)
    const first = mergeSort(nums.slice(0, halfIndex))
    const second = mergeSort(nums.slice(halfIndex))
    const result = merge(first, second)
  
    return result
  };
  
  const merge = (first, second) => {
    const result = []
    let firstIndex = 0
    let secondIndex = 0
    while(firstIndex < first.length && secondIndex < second.length){
      if(first[firstIndex] < second[secondIndex]){
        result.push(first[firstIndex])
        firstIndex++
      }else{
        result.push(second[secondIndex])
        secondIndex++
      }
    }
    result.push(...first.slice(firstIndex))
    result.push(...second.slice(secondIndex))
    return result
  }
  
  
  module.exports = {
    mergeSort,
  };
  
  const numbers = [7, -30, -4, -1, 12, 0, 20];
  const result = mergeSort(numbers);
  // -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ] 
  
  console.log(result)
  
  
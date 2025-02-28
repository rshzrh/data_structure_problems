/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */





var topKFrequentOld = function(nums, k) {
    const map = {}
    for(let num of nums){

        if(num in map)
            map[num] += 1
        else
            map[num] = 1
    }
    // console.log(map)
    const acc = new Array(nums.length + 1)
    for(let i = 0; i < acc.length; i++)
        acc[i] = []
    // console.log(acc)
    for(let num in map){
        const count = map[Number(num)]
        
        acc[count].push(Number(num))
    }
    // console.log(acc)
    let index = acc.length - 1
    let total = 0
    const result = []

    while(result.length < k){
        if(acc[index].length > 0){
            total = result.length
            // console.log(acc[index])
            // console.log(total)
            // console.log(k)
            result.push(...acc[index].slice(0, k - total))
            
        }
        index--       
    }
    // console.log(result)
    return result
    
    
};

var topKFrequent = function(nums, k) {

    const map = {}
    for(let num of nums){
        if(num in map)
            map[num] += 1
        else
            map[num] = 1
    }
    const freqs = []
    for(let key in map)
        freqs.push([map[key], key])
    

    const sorted = freqs.sort((a, b) => {
        const firstFreq = a[0]
        const secondFreq = b[0]
        if(firstFreq < secondFreq)
            return 1
        if(firstFreq > secondFreq)
            return -1
        return 0
    })
    const result = []
    for(let i = 0; i < k; i++){
        result.push(Number(sorted[i][1]))
    }
    return result

}

// @lc code=end




const nums = [1]

const k = 1
console.log(topKFrequent(nums, k))


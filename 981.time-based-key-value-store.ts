/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

interface TimeValue{
    value: string
    timestamp: number
}

class TimeMap {

    map:Map<String, TimeValue[]> 

    constructor() {
        this.map = new Map<String, TimeValue[]>()
    }

    set(key: string, value: string, timestamp: number): void {
        let values: TimeValue[] | undefined = []
        if(this.map.has(key)){
            values = this.map.get(key)
        }
        values?.push({value: value, timestamp: timestamp})
        this.map.set(key, values)
        // console.log(this.map)
    }

    get(key: string, timestamp: number): string {
        //values is always sorted
        if(!this.map.has(key))
            return ""
        let values = this.map.get(key)
        return this.search(values, timestamp)
        
     

    }
    search(values: TimeValue[] | undefined, timeStamp: number): string{
        if(values === undefined)
            return ""

        let left = 0
        let right = values.length - 1

        let result = ""

        while(left <= right){
            
            let mid = Math.floor((left + right) / 2)
            // console.log(left, mid, right)
            
            if(values[mid].timestamp > timeStamp)
                right = mid - 1
            else{
                result = values[mid].value
                left = mid + 1
            }
        }
        return result
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

const timeMap = new TimeMap();
timeMap.set("love", "high", 10)
timeMap.set("love", "low", 20)
console.log(timeMap.get("love", 5))
// console.log(timeMap.get("love", 10))
// console.log(timeMap.get("love", 15))
// console.log(timeMap.get("love", 20))
// console.log(timeMap.get("love", 25))
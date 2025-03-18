/*
 * @lc app=leetcode id=72 lang=typescript
 *
 * [72] Edit Distance
 */

// @lc code=start
//TODO: The below solution does not work
function minDistance(word1: string, word2: string): number {
    
    if(word1 === word2)
        return 0
    
    if(word1.length === 0 && word2.length > 0)
        return word2.length
    if(word2.length === 0)
        return Infinity

    let result = 0
    const word1First = word1[0]
    const word2First = word2[0]

    if(word2First === word1First){
        result = minDistance(word1.slice(1), word2.slice(1))
    }else{
        let replaceDistance = minDistance(word2First + word1.slice(1), word2) //replace
        let insertDistance = minDistance(word2First + word1, word2) //insert
        let deleteDistance = minDistance(word1.slice(1), word2) //delete
        
        result = 1 + Math.min(replaceDistance, insertDistance, deleteDistance)
        console.log(word1, word2, "replace", replaceDistance, "insert", insertDistance, "delete", deleteDistance)
        
    }
    console.log(word1, word2, result)
    return result
    
};

// @lc code=end
const word1 = "horse"
const word2 = "ros"
console.log(minDistance(word1, word2))

/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    const map = {}

    for(let str of strs){
        const sorted = str.split('').sort().join('')
        if(!(sorted in map))
            map[sorted] = []
        map[sorted].push(str)
    }
    return Object.values(map)
}
var groupAnagramsN2 = function(strs) {

    const map = {}
    const visited = new Set()

    const result = []

    for(let i = 0; i < strs.length; i++){
        const first = strs[i]
        if(visited.has(first))
            continue
        for(let j = i + 1; j < strs.length; j++){
            const second = strs[j]
            if(isAnagram(first, second)){
                if(first in map){
                    map[first].push(second)
                }else{
                    map[first] = [second]
                }
                visited.add(second)
            }
        }
        if(first in map)
            result.push([first, ...map[first]])
        else
            result.push([first])
    }
    return result
};

function isAnagram(first, second){
    if(first.length !== second.length)
        return false
    const map = {}
    for(let ch of first){
        if(ch in map)
            map[ch] += 1
        else
            map[ch] = 1
    }
    for(let ch of second){
        if(!(ch in map))
            return false
        const count = map[ch]
        if(count <= 0)
            return false
        map[ch] = count - 1
    }
    for(let ch in map)
        if(map[ch] > 0)
            return false
    return true

}
// @lc code=end

const strs = ["eat","tea","tan","ate","nat","bat"]
// const strs = ["a"]
console.log(groupAnagrams(strs))
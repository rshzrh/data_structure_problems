/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = {}

    let longest = t
    let shortest = s
    if(s.length > t.length){
        longest = s
        shortest = t
    }
    for(let ch of longest){
        if(ch in map)
            map[ch] += 1
        else
            map[ch] = 1
    }
    for(let ch of shortest){
        if(!(ch in map))
            return false
        map[ch] -= 1
    }
    // console.log(map)
    for(let ch in map){
        if(map[ch] !== 0)
            return false
    }
    return true
    
};
// @lc code=end

let s = "rat"
let t = "car"
console.log(isAnagram(s, t))
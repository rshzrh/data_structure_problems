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

    if(s.length !== t.length)
        return false

    const map = {}
    for(let ch of s){
        if(ch in map)
            map[ch] += 1
        else
            map[ch] = 1
    }

    for(let ch of t){
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
    
};
// @lc code=end

let s = "anagram"
let t = "nagaram"
console.log(isAnagram(s, t))
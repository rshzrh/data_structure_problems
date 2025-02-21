/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    
    for(let i = 0; i < s.length; i++){
        let sub = s[i]
        for(let j = i + 1; j < s.length; j++){
            if(sub.indexOf(s[j]) === -1){
                sub += s[j]
            }else{
                // console.log(i, j, sub)
                break
            }
        }
        if(max < sub.length)
            max = sub.length

    }
    return max
    
};

// @lc code=end

s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))

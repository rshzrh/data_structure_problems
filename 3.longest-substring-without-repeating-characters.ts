/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {

    let longest: string = ""

    for(let i = 0; i < s.length; i++){
        let sub: string = s[i]
        let visited: Set<string> = new Set<string>()
        
        visited.add(s[i])

        for(let j = i + 1; j < s.length; j++){
            let current = s[j]
            if(visited.has(current))
                break
            sub += current
            visited.add(current)
        }
        if(sub.length > longest.length)
            longest = sub
    }
    return longest.length
    
};
// @lc code=end

let s = "pwwkew"
console.log(lengthOfLongestSubstring(s))

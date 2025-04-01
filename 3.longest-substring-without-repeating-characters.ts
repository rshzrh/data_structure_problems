/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    
    let left = 0
    let max = 0
    const characters = new Map<string, number>()

    for(let right = 0; right < s.length; right++){
        const current = s[right]
        characters.set(current, (characters.get(current) || 0) + 1)
        while((characters.get(current) ?? 0) > 1){
            characters.set(s[left], (characters.get(s[left]) || 1) - 1)
            if(characters.get(s[left]) === 0)
                characters.delete(s[left])
            left++
        }
        // console.log("left", left, "right", right)
        // console.log(characters)

        max = Math.max(max, characters.size)
        
        
    }
    return max
    
};
// @lc code=end

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))

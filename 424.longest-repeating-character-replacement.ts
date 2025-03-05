/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {

    let left = 0
    let right = 0
    let maxFreq = 0

    
    const charCount:Map<string, number> = new Map<string, number>()
    let maxLength = 0

    while(right < s.length){
        const charRight = s[right]
        charCount.set(charRight, (charCount.get(charRight) || 0) + 1)
        
        maxFreq = Math.max(maxFreq, charCount.get(charRight) || 0)

        const currentWindowLength = (right - left) + 1
        if(currentWindowLength - maxFreq > k){
            const charLeft = s[left]
            charCount.set(charLeft, (charCount.get(charLeft) || 0) - 1)
            left++
        }
        maxLength = Math.max(maxLength, (right - left + 1))
        right++

    }
    return maxLength
    
};
// @lc code=end

let s = "AABABBA"
let k = 2
console.log(characterReplacement(s, k))

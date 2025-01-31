/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    
    if(haystack === null || haystack.length === 0 || needle === null || needle.length === 0)
        return -1
    if(needle.length > haystack.length)
        return -1
    
    for(let i = 0; i < haystack.length; i++){
        const hayChar = haystack.charAt(i)
        
        if(hayChar === needle.charAt(0)){
            let startIndex = i
            let found = true
            for(let j = 0; j < needle.length && j < haystack.length; j++){
                if(haystack.charAt(startIndex) != needle.charAt(j)){
                    found = false
                    break
                }
                startIndex++
            }
            if(found)
                return i
        }

    }

    return -1
    
};
// @lc code=end


/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let shortestString = ""
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i]
        if (shortestString.length === 0)
            shortestString = str
        else if (str.length < shortestString.length)
            shortestString = str
    }
    

    while (shortestString.length > 0) {
        
        let found: boolean = true
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]
            if (!str.startsWith(shortestString)) {
                found = false
                shortestString = shortestString.substring(0, shortestString.length - 1)
                break
            }
        }
        if(found)
            break

    }
    return shortestString

};

// @lc code=end


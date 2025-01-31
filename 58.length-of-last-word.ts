/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    if(s == null || s.length === 0)
        return 0

    let index = s.length - 1
    while(s.charAt(index) === ' '){
        index -= 1
        if(index < 0)
            return 0
    }
    const end = index
    while(s.charAt(index) != ' ' && index >= 0){
        index -= 1
    }
    return end - index
    
};

// @lc code=end


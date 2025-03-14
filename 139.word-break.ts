/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[], index:number = 0, memo: {[key: number]: boolean} = {}): boolean {
    
    if(index in memo)
        return memo[index]

    if(index === s.length)
        return true

    for(let word of wordDict){
        if(s.startsWith(word, index)){
            if(wordBreak(s, wordDict, index + word.length, memo)){
                memo[index] = true
                return true
            }
        }
    }
    memo[index] = false
    return false

};
// @lc code=end

const s = "applepenapple"
const wordDict = ["apple","pen"]
console.log(wordBreak(s, wordDict))
/*
 * @lc app=leetcode id=115 lang=typescript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
function numDistinct(s: string, t: string, 
    sIndex: number = 0, tIndex: number = 0,
    memo: {[key: string]: number} = {}): number {
    const key = sIndex + '-' + tIndex
    if(key in memo){
        // console.log(key, "from memo")
        return memo[key]
    }

    // console.log("s:", sIndex, " | t:", tIndex)
    if(tIndex >= t.length)
        return 1

    if(sIndex >= s.length && tIndex < t.length)
        return 0

    let result: number = 0

    const first = s[sIndex]
    if(t.charAt(tIndex) === first){
        result += numDistinct(s, t, sIndex + 1, tIndex + 1, memo)
    }
    result += numDistinct(s, t, sIndex + 1, tIndex, memo)
    memo[key] = result
    return result
    
};
// @lc code=end

const s = "babgbag"
const t = "bag"

console.log(numDistinct(s, t))
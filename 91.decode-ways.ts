/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string, index:number = 0, memo: {[key: number]: number} = {}): number {
    if(index in memo)
        return memo[index]
    // console.log(s, index)
    if(index === s.length)
        return 1
    if(index > s.length)
        return 0
    if(s[index] === '0')
        return 0

    let result = numDecodings(s, index + 1, memo)
    if(s[index] === '1' || (s[index] === '2' && Number(s[index + 1]) <= 6 )){
        
        result += numDecodings(s, index + 2, memo)
    }
    memo[index] = result
    return result
    

};
// @lc code=end

console.log(numDecodings("11106"))
/*
 * @lc app=leetcode id=1143 lang=typescript
 *
 * [1143] Longest Common Subsequence
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string, index1: number = 0, index2: number = 0, 
    memo: {[key: string]: number} = {}): number {

    const key = index1 + '-' + index2
    if(key in memo)
        return memo[key]

    if(index1 >= text1.length || index2 >= text2.length)
        return 0

    
    const first1 = text1[index1]
    const first2 = text2[index2]

    let max = 0
    if(first1 === first2){
        max = 1 + longestCommonSubsequence(text1, text2, index1 + 1, index2 + 1, memo)
    }else{
        max = Math.max(longestCommonSubsequence(text1, text2, index1, index2 + 1, memo), 
        longestCommonSubsequence(text1, text2, index1 + 1, index2, memo))
    }
    // console.log(max, " | ", text1, " -> ", text2)
    memo[key] = max
    return max
    
};
// @lc code=end

const text1 = "abc"
const text2 = "def"
console.log(longestCommonSubsequence(text1, text2))
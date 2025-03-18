/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start

function uniquePaths(m: number, n: number): number {

    const dp: number[][] = new Array(m).fill(new Array(n).fill(1))
    for(let i = 1; i < m; i++){
        for(let j = 1; j < n; j++){
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    // console.log(dp)
    return dp[m - 1][n - 1]
}
function uniquePathsRecursion(m: number, n: number, memo:{[key: string]: number} = {}): number {
    const key = `${m}-${n}`
    if(key in memo)
        return memo[key]
    if(m === 1 || n == 1)
        return 1

    const result = uniquePathsRecursion(m - 1, n, memo) + uniquePathsRecursion(m, n - 1, memo)
    memo[key] = result
    return result
    
};
// @lc code=end

console.log(uniquePaths(3, 2))
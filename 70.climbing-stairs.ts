/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairsRecursive(n: number): number {
    if(n === 1) return 1
    if(n === 2) return 2
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2)
};

function climbStairs(n: number): number {
    if(n === 1) return 1
    if(n === 2) return 2

    const values:Map<number, number> = new Map<number, number>()
    values.set(1, 1)
    values.set(2, 2)
    for(let i = 3; i <= n; i++){
        values.set(i, values.get(i - 1) + values.get(i - 2))
    }
    return values.get(n)
    
};

// @lc code=end


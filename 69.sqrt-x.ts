/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    if(x === 2)
        return 1
    let left = 1
    let right = x
    let mid = Math.floor((left + right) / 2)
    while(left <= right){
        // console.log(`${left} - ${mid} - ${right}`)
        if (mid === x)
            return mid
        if(mid * mid > x)
            right = mid - 1
        else
            left = mid + 1
        mid = Math.floor((left + right) / 2)
    }
    
    return mid
};

const x = 6
const sq  =mySqrt(x)
console.log(sq)
// @lc code=end


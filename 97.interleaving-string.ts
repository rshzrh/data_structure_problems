/*
 * @lc app=leetcode id=97 lang=typescript
 *
 * [97] Interleaving String
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string, 
    s1Index: number = 0, 
    s2Index:number = 0, 
    s3Index: number = 0, 
    memo: {[key: string]: boolean} = {}
): boolean {
    
    
    const key = s1Index + '-' + s2Index + '-' + s3Index
    if(key in memo){
        // console.log("read", key, "from memo")
        return memo[key]
    }
    // console.log("s1:", s1, "s2:", s2, "s3:", s3)
    if(s3Index >= s3.length){
        if(s2Index >= s2.length && s1Index >= s1.length)
            return true
        return false
    }
        

    const first = s3[s3Index]
    
    let useS1Result = false
    let useS2Result = false
    
    if(s1.length > 0 && s1.charAt(s1Index) === first){
        useS1Result = isInterleave(s1, s2, s3, s1Index + 1, s2Index, s3Index + 1, memo)
    }
    if(s2.length > 0 && s2.charAt(s2Index) == first){
        useS2Result = isInterleave(s1, s2, s3, s1Index, s2Index + 1, s3Index + 1, memo)
    }

    const result = useS1Result || useS2Result
    memo[key] = result
    return result
};
// @lc code=end

const s1 = "a"
const s2 = "b"
const s3 = "a"
console.log(isInterleave(s1, s2, s3))

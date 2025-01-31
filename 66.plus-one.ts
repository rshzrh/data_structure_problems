/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    if(digits == null || digits.length === 0)
        return []
    
    
    digits[digits.length - 1] += 1
    for(let i = digits.length - 1; i > 0; i--){
        if(digits[i] >= 10){
            digits[i] -= 10
            digits[i - 1] += 1
        }else{
            
            return digits
        }
    }
    if(digits[0] >= 10){
        digits[0] -= 10
        digits.unshift(1)
    }
        

    return digits
};

// @lc code=end


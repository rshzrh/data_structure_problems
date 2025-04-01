/*
 * @lc app=leetcode id=1423 lang=typescript
 *
 * [1423] Maximum Points You Can Obtain from Cards
 */

// @lc code=start
function maxScore(cardPoints: number[], k: number): number {

    const total = cardPoints.reduce((a, b) => a + b)
    if(k >= cardPoints.length)
        return total

    let left = 0
    let max = 0
    
    let windowSum = 0
    
    for(let right = 0; right < cardPoints.length; right++){
        windowSum += cardPoints[right]
        if((right - left + 1) === (cardPoints.length - k)){
            // console.log(left, "->", right, " | ", windowSum)
            max = Math.max(max, total - windowSum)
            windowSum -= cardPoints[left]
            left++
        }
        
    }

    return max
    
};
// @lc code=end
const cardPoints = [2, 2, 2]
const k = 2

console.log(maxScore(cardPoints, k))

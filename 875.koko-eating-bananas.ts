/*
 * @lc app=leetcode id=875 lang=typescript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {


    let maxK = Math.max(...piles)
    let minK = 1

    let res = maxK

    while(minK <= maxK){
        let k = Math.floor((minK + maxK) / 2)
        let hours = eatingHours(piles, k)
        // console.log(k, "->", hours)
        if(hours <= h){
            maxK = k - 1
            res = k
        }else{
            minK = k + 1
        }
    }
    return res
};

function eatingHours(piles: number[], speed: number){

    let hours = 0
    for(let pile of piles){
        hours += Math.ceil(pile / speed)
    }
    return hours
}


// @lc code=end

const piles: number[] = [3, 6, 7, 11]
const h:number = 8

const result = minEatingSpeed(piles, h)
console.log(result)
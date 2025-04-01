/*
 * @lc app=leetcode id=904 lang=typescript
 *
 * [904] Fruit Into Baskets
 */

// @lc code=start

function countDifferentNumbers(fruits: number[], start: number, end: number){
    const types: {[key: number]: number} = {}
    let counter: number = 0

    for(let i = start; i <= end; i++){
        if(!(fruits[i] in types)){
            types[fruits[i]] = 1
            counter++
        }
    }
    return counter
}
function totalFruit(fruits: number[]): number {

    let left = 0
    let right = 0
    let max = 1
    const basket = new Map<number, number>()

    while(right < fruits.length){
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1)
        while(basket.size > 2){
            basket.set(fruits[left], (basket.get(fruits[left]) || 0) - 1)
            if(basket.get(fruits[left]) === 0){
                basket.delete(fruits[left])
            }    
            left++
        }
        
        max = Math.max(max, right - left + 1)
        right++
    }

    
    return max

    
};
// @lc code=end

const fruits = [0,1,2,2]
const result = totalFruit(fruits)
console.log(result)
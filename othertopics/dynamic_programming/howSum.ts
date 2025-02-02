

export function howSum(targetSum: number, numbers:number[], memo: {} = {}): number[] | null{
    // console.log(`${targetSum}`)
    if(targetSum in memo)
        return memo[targetSum]

    if(targetSum === 0)
        return []
    if(targetSum < 0)
        return null

    for(let num of numbers){
        const remainder = targetSum - num
        const subNumbers = howSum(remainder, numbers, memo)
        if(subNumbers !== null){
            memo[targetSum] = [...subNumbers, num]
            return memo[targetSum]
        }
    }
    
    memo[targetSum] = null    
    return null
}

// console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(8, [5, 3, 2]))
// console.log(howSum(7, [4, 2]))
// console.log(howSum(300, [14, 7]))



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

function howSumTable(targetSum: number, numbers: number[]): number[]{
    if(targetSum === 0)
        return []

    const table = new Array(targetSum + 1).fill(null)
    table[0] = []
    for(let num of numbers){
        console.log(`processing ${num}`)
        if(num < table.length){
            table[num] = [num]
        }
    }
    // consol e.log(table)
    for(let i = 0; i < table.length; i++){
        for(let num of numbers){
            if(i + num < table.length){
                if(table[i] === null)
                    continue
                
                table[i + num] = [num, ...table[i]]
            }
        }
    }
    console.log(table)
    return table[targetSum]

}

console.log(howSumTable(7, [5, 3, 4, 7]))
// console.log(howSumTable(8, [5, 3, 2]))
// console.log(howSum(7, [4, 2]))
// console.log(howSum(300, [14, 7]))

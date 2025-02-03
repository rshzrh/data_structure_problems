


function canSum(targetSum:number, numbers: number[], memo={}): boolean{
    if(targetSum in memo)
        return memo[targetSum]
    if(targetSum === 0)
        return true
    if(targetSum < 0)
        return false

    for(let num of numbers){
        const remainder = targetSum - num
        if(canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true
            return true
        }
            
    }
    memo[targetSum] = false
    return false
}

function canSumTable(targetSum: number, numbers: number[]): boolean{
    if(targetSum ===  0)
        return true

    const table: boolean[] = new Array<boolean>(targetSum + 1).fill(false)
    table[0] = true
    for(let i = 1; i < table.length; i++){
        if(numbers.includes(i)){
            console.log(`i found: ${i}`)
            table[i] = true
        }
            
    }
    console.log(table)    
    for(let i = 1; i < table.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[j] < table.length)
                table[i] = table[i] && table[numbers[j]]
        }
    }
    console.log(table)
    return table[targetSum]
}

console.log(canSumTable(7, [5, 3, 4, 7]))
// console.log(canSum(7, [2, 3]))
// console.log(canSum(7, [2, 4]))
console.log(canSumTable(300, [7, 14]))
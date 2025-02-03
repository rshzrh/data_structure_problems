import { howSum } from "./howSum"

function bestSum(targetSum: number, numbers: number[]): number[] | null {

    let best:number[] = []
    for(let i = 0; i < numbers.length; i++){
        const result = howSum(targetSum, numbers.slice(i))
        if(result != null){
            if(best.length === 0 || result.length < best.length){
                // console.log(`result: ${result}`)
                best = result
                continue
            }
        }
    }
    return best   

}

function bestSumTable(targetSum: number, numbers: number[]): number[] {
    if(targetSum === 0)
        return []

    const table = new Array(targetSum + 1).fill(null)
    table[0] = []
    for(let num of numbers){
        if(num < table.length){
            table[num] = [num]
        }
    }

    for(let i = 0; i < table.length; i++){
        if(table[i] === null)
            continue
        for(let num of numbers){
            if(i + num < table.length){
                const combination = [...table[i], num]

                if(table[i + num] === null){
                    table[i + num] = combination
                }else{
                    if(table[i + num].length > combination.length)
                        table[i + num] = combination
                }
            }
        }
    }
    return table[targetSum]

}

console.log('------------------')
console.log(bestSumTable(7, [5, 3, 4, 7]))
console.log(bestSumTable(8, [1, 4, 5]))
console.log(bestSumTable(8, [2, 3, 5]))
console.log(bestSumTable(7, [4, 2]))
console.log(bestSumTable(100, [1, 2, 5, 25]))
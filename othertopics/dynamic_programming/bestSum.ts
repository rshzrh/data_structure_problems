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

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(7, [4, 2]))
console.log(bestSum(100, [1, 2, 5, 25]))
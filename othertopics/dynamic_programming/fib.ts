
function recursiveFib(n: number): number{
    if(n <= 2)
        return 1
    return recursiveFib(n - 1) + recursiveFib(n - 2)
}

function fib(n: number, memo: {}): number{
    if(n in memo)
        return memo[n]
    if(n <= 2){
        return 1
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n] 

}

console.log(fib(3, {}))
console.log(fib(4, {}))
console.log(fib(5, {}))
console.log(fib(6, {}))
console.log(fib(7, {}))
console.log(fib(8, {}))
console.log(fib(50, {}))

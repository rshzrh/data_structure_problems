
function countConstruct(target: string, strs: string[], memo:{} = {}): number{
    if(target in memo)
        return memo[target]
    if(target.length === 0)
        return 1

    let result = 0
    for(let str of strs){

        if(target.startsWith(str)){
            const remained = target.replace(str, "")
            const counter = countConstruct(remained, strs, memo)
            memo[remained] = counter
            result += counter
        }
    }
    memo[target] = result
    return result
}

console.log(countConstruct("oneisnone", ["one", "none", "is"]))
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
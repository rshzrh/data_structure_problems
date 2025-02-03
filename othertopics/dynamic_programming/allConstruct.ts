
function allConstruct(target: string, strs: string[], memo:{} = {}): string[][] {
    if(target in memo){
        return memo[target]
    }
    if(target === ""){
        return [[]]
    }

    const result: string[][] = []
    for(let str of strs){
        if(target.startsWith(str)){
            const remainder = target.replace(str, "")
            const subResult = allConstruct(remainder, strs, memo)
            if(subResult != null){
                const targetWays = subResult.map(way => [str, ...way])
                result.push(...targetWays)
            }
        }
    }
    memo[target] = result
    return result
}

// console.log(allConstruct("oneisnone", ["one", "none", "is"]))
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
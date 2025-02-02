
/**
 * 
 * Write a function, canConcat, that takes in a string and an array of words as arguments. 
 * The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
examples:
canConcat("oneisnone", ["one", "none", "is"]);// -> true
canConcat("oneisnone", ["on", "e", "is"]);// -> false
canConcat("oneisnone", ["on", "e", "is", "n"]);// -> true
canConcat("santahat", ["santah", "hat"]);// -> false
canConcat("santahat", ["santah", "san", "hat", "tahat"]);// -> true  
 * 
 */

function canConcat(target: string, strs:string[], memo: {} = {}): boolean{
    if(target in memo)
        return memo[target]

    if(target.length === 0)
        return true
    for(let i = 0; i < strs.length; i++){
        const str = strs[i]
        if(target.startsWith(str)){
            const remained = target.replace(str, "")
            if(canConcat(remained, strs, memo) === true){
                memo[remained] = true
                return true
            }

                
        }
    }
    memo[target] == false
    return false
}

console.log(canConcat("oneisnone", ["one", "none", "is"]))
console.log(canConcat("oneisnone", ["on", "e", "is"]));
console.log(canConcat("oneisnone", ["on", "e", "is", "n"]))
console.log(canConcat("santahat", ["santah", "hat"]))
console.log(canConcat("santahat", ["santah", "san", "hat", "tahat"]))
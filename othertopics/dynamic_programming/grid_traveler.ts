
function gridTravelerRecursive(m, n){
    if(m === 0 || n === 0)
        return 0
    if(m === 1 && n === 1)
        return 1

    return gridTravelerRecursive(m, n - 1) + gridTravelerRecursive(m - 1, n)
    
}

function gridTraveler(m, n, memo:{}): number{
    if(m === 0 || n === 0)
        return 0
    if(m === 1 && n === 1)
        return 1

    const key = `${m}-${n}`
    if(memo[key])
        return memo[key]
    
    memo[key] =  gridTraveler(m, n - 1, memo) + gridTraveler(m - 1, n, memo)
    return memo[key]
    
}
    
console.log(gridTraveler(18, 18, {}))
console.log(gridTraveler(31, 13, {}))



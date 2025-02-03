
function gridTravelerRecursive(m, n){
    if(m === 0 || n === 0)
        return 0
    if(m === 1 && n === 1)
        return 1

    return gridTravelerRecursive(m, n - 1) + gridTravelerRecursive(m - 1, n)
    
}

function gridTraveler(m, n, memo:{} = {}): number{
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

function gridTravelerTable(m, n): number{
    if(m === 0 || n === 0)
        return 0

    const grid: number[][] = []
    
    for(let i = 0; i < m ; i++)
        grid.push(new Array(n).fill(0))
    console.log(grid)

    grid[0][0] = 1
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let current = grid[i][j]
            if(i - 1 >= 0)
                current += grid[i - 1][j]
            if(j - 1 >= 0)
                current += grid[i][j - 1]
            grid[i][j] = current
        }
    }
    console.log(grid)
    return grid[m - 1][n -1]
}
    
console.log(gridTravelerTable(18, 18))
console.log(gridTravelerTable(3, 3))
console.log(gridTraveler(2, 4))




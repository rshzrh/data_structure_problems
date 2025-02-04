const pairProduct = (numbers, targetProduct) => {
    const map = {}
    for(let i = 0 ; i < numbers.length; i++){
    
        const num = numbers[i]
        const factor = targetProduct / num
        if(factor in map)
            return [map[factor], i]
        map[num] = i
    }
    return []
}

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2])
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5])
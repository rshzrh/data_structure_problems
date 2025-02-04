const compress = (s) => {

    let result = ""

    let currentNumber = 1
    for(let i = 1; i < s.length; i++){
        if(s[i] === s[i - 1]){
            currentNumber++
        }else{
            if(currentNumber > 1)
                result += `${currentNumber}${s[i - 1]}`
            else
                result += `${s[i - 1]}`
            currentNumber = 1
        }

    }
    const lastChar = s[s.length - 1]
    if(currentNumber > 1)
        result += `${currentNumber}${lastChar}`
    else
        result += `${lastChar}`

    return result
}

console.log(compress('ccaaatsss')); // -> '2c3at3s')
console.log(compress('ssssbbz')); // -> '4s2bz'
console.log(compress('ppoppppp')); // -> '2po5p'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); // -> '127y'
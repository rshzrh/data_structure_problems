/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let result = ""

    let greater = a
    let smaller = b
    if(b.length > a.length){
        greater = b
        smaller = a
    }

    const diff = greater.length - smaller.length
    for(let i = 0; i < diff; i++)
        smaller = "0" + smaller

    // console.log(`greater: ${greater} | smaller: ${smaller}`)
    // console.log(`greater: ${greater.length} | smaller: ${smaller.length}`)

    let remainder = 0
    for(let i = greater.length - 1; i >= 0; i--){
        const first = Number(greater.charAt(i))
        const second = Number(smaller.charAt(i))
        
        const sum = first + second + remainder
        // console.log(`i: ${i} | first ${first} | second: ${second} | sum: ${sum} | remainder: ${remainder}`)
        if(sum > 1){
            remainder = Math.floor(sum / 2)
            const digit = sum - 2
            result = digit + result
        }else{
            remainder = 0
            result = sum + result
        }
    }
    if(remainder > 0)
        result = "1" + result

    return result
};


// @lc code=end


/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {

    const pad:Map<string, string[]> = new Map<string, string[]>()
    pad.set("2", ['a', 'b', 'c'])
    pad.set("3", ['d', 'e', 'f'])
    pad.set("4", ['g', 'h', 'i'])
    pad.set("5", ['j', 'k', 'l'])
    pad.set("6", ['m', 'n', 'o'])
    pad.set("7", ['p', 'q', 'r', 's'])
    pad.set("8", ['t', 'u', 'v'])
    pad.set("9", ['w', 'x', 'y', 'z'])

    return generate(digits, pad)
};

function generate(digits: string, pad: Map<string, string[]>): string[]{
    if(digits.length === 0)
        return []
    if(digits.length === 1){
        return pad.get(digits) || []
    }

    const first = digits[0]
    const remained = digits.slice(1)
    const perms = generate(remained, pad)
    const firstPerms = pad.get(first) || []

    const result: string[] = []
    for(let perm of perms){
        for(let firstperm of firstPerms){
            result.push(firstperm + perm)
        }
    }

    return result

}
// @lc code=end

console.log(letterCombinations("23"))
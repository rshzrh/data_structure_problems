/*
 * @lc app=leetcode id=567 lang=typescript
 *
 * [567] Permutation in String
 */

// @lc code=start

function checkInclusion(s1: string, s2: string): boolean {
    if(s2.length < s1.length)
        return false

    const charMap:Map<string, number> = new Map<string, number>()
    for(let ch of s1){
        charMap.set(ch, (charMap.get(ch) || 0) + 1)
    }
    // console.log(charMap)
    for(let i = 0; i <= s2.length - s1.length; i++){
        let end = i + s1.length
        // console.log("i", i, "end", end)
        let subMap:Map<string, number> = new Map<string, number>()
        for(let k = i; k < end; k++){
            const ch = s2[k]
            subMap.set(ch, (subMap.get(ch) || 0) + 1)
        }
        // console.log("subMap", subMap)
        let found = true
        for(let ch of subMap.keys()){
            if(charMap.get(ch) !== subMap.get(ch)){
                found = false
                break
            }

        }
        if(found)
            return true

    }
    return false

}
function checkInclusionBruteForce(s1: string, s2: string): boolean {
    if(s2.length < s1.length)
        return false
    const permutations = permutation(s1)
    for(let perm of permutations){
        if(s2.indexOf(perm) !== -1){
            console.log("found:", perm)
            return true
        }
    }
    return false    
};

function permutation(text: string): string[]{
    const result: string[] = []

    if(text.length === 0)
        return []
    if(text.length === 1)
        return [text]

    
    const first = text[0]
    const remained = text.slice(1)
    
    const perms = permutation(remained)
    // console.log("first", first, "remained", remained)
    // console.log("perms", perms)
    for(let perm of perms){

        for(let i = 0; i < perm.length + 1; i++){
            const newPerm = perm.slice(0, i) + first + perm.slice(i)
            result.push(newPerm)
        }

    }

    return result
}

// @lc code=end

const s1 = "trinitrophenylmethylnitramine"
const s2 = "dinitrophenylhydrazinetrinitrophenylmethylnitramine"
console.log(checkInclusion(s1, s2))
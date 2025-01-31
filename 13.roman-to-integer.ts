/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const map: Map<String, number> = new Map<String, number>()
    map.set('I', 1)
    map.set('V', 5)
    map.set('X', 10)
    map.set('L', 50)
    map.set('C', 100)
    map.set('D', 500)
    map.set('M', 1000)

    map.set('A', 4)
    map.set('B', 9)
    map.set('H', 40)
    map.set('G', 90)
    map.set('E', 400)
    map.set('F', 900)

    s = s.replaceAll('IV', 'A')
    s = s.replaceAll('IX', 'B')
    s = s.replaceAll('XL', 'H')
    s = s.replaceAll('XC', 'G')
    s = s.replaceAll('CD', 'E')
    s = s.replaceAll('CM', 'F')

    console.log(s)
    let result = 0
    for(let i = 0; i < s.length; i++){
        const value = map.get(s[i])
        if(value)
            result += value
    }
    map.clear()
    
    return result;

};

// @lc code=end


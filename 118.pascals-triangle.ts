/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    if(numRows === 0)
        return []
    if(numRows === 1)
        return [[1]]
    if(numRows === 2)
        return [[1], [1, 1]]


    const result = [[1], [1, 1]]
    
    for(let i = 3; i <= numRows; i++){
        const prev = result[i - 2]
        
        const newRow = [1]
        for(let j = 1; j < prev.length; j++)
            newRow.push(prev[j - 1] + prev[j])
        newRow.push(1)
        result.push(newRow)
    }

    return result
    
};

// @lc code=end


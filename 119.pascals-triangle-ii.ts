/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    if(rowIndex === 0)
        return [1]
    if(rowIndex === 1)
        return [1, 1]

    let prev = [1, 1]
    for(let i = 2; i <= rowIndex; i++){
        const newRow = [1]

        for(let j = 1; j < prev.length; j++)
            newRow.push(prev[j - 1] + prev[j])

        newRow.push(1)
        prev = newRow
    }
    return prev
};

// @lc code=end


/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
};
// @lc code=end

const nums = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums))
/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const result:number[] = []
    let i = 0
    let j = 0
    do{
        // console.log(`i: ${i} | j: ${j}`)
        if(i >= m){
            result.push(nums2[j])
            j++
            continue
        }
        if(j >= n){
            result.push(nums1[i])
            i++
            continue
        }

        // console.log(`nums1: ${nums1[i]} | nums2: ${nums2[j]}`)
        if(nums1[i] <= nums2[j]){
            result.push(nums1[i])
            i++
        }else{
            result.push(nums2[j])
            j++
        }
    }while(i < m || j < n)
    for(i = 0; i < nums1.length; i++)
        nums1[i] = result[i]
    
    
};

// @lc code=end


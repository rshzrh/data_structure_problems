/**
 * Given a set of distinct positive integers, 
 * find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.
For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].
 */

function findSubsetWrong(numbers: number[]): number[] | null {
    let maxLength = -1
    let start = -1
    let end = -1

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            let notSatisfied = false
            for (let index = i; index < j; index++) {
                if (!(numbers[index] % numbers[j] === 0) && !(numbers[j] % numbers[index] === 0)) {
                    notSatisfied = true
                    break
                }
            }
            if(notSatisfied)
                break
            if(j - i > maxLength){
                maxLength = j - i
                start = i
                end = j
            }

        }
    }

    return numbers.slice(start, end + 1)
}

function findSubset(numbers: number[]): number[] {
    if (numbers.length === 0) return [];

    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);
    console.log(numbers)

    // dp[i] will store the size of the largest subset ending with numbers[i]
    const dp: number[] = new Array(numbers.length).fill(1);

    // prev[i] will store the index of the previous element in the subset
    const prev: number[] = new Array(numbers.length).fill(-1);

    let maxLength = 1;
    let maxIndex = 0;

    for (let i = 1; i < numbers.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numbers[i] % numbers[j] === 0 && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }

    // Reconstruct the subset
    const subset: number[] = [];
    for (let i = maxIndex; i >= 0; i = prev[i]) {
        subset.unshift(numbers[i]);
    }

    return subset;
}

console.log(findSubset([3, 7, 5, 8, 10, 20, 21]))
console.log(findSubset( [1, 3, 6, 24]))

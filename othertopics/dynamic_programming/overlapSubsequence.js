const overlapSubsequence = (str1, str2, memo = {}) => {

    const key = str1 + "-" + str2
    if(key in memo)
      return memo[key]
    
    if(str1 === null || str1.length === 0 || str2 === null || str2.length === 0)
      return 0
  
    let first = 0
    let second = 0
    let third = 0
    if(str1[0] === str2[0])
      first = 1 + overlapSubsequence(str1.slice(1), str2.slice(1), memo)
    else{
      second = overlapSubsequence(str1, str2.slice(1), memo)
      third = overlapSubsequence(str1.slice(1), str2, memo)
    }
  
    memo[key] =  Math.max(first, second, third)
    return memo[key]
  };
  

  
  console.log(overlapSubsequence("dogs", "daogt")); // -> 3
  console.log(overlapSubsequence("xcyats", "criaotsi")); // -> 4
  console.log(overlapSubsequence("xfeqortsver", "feeeuavoeqr")); // -> 5
  
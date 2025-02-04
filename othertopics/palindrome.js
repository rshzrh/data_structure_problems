
const palindrome = (s) => {
    console.log(s)
    if(s === null || s.length <= 1)
      return true
    const first = s[0]
    const last = s[s.length - 1]
    return first === last && palindrome(s.slice(1, s.length - 1))
  };

  console.log(palindrome("abcbca")); // -> true
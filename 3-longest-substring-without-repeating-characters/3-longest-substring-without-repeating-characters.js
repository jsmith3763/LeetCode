/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = (str) => {
  if(str.length <= 1) return str.length;
  let longest = 0;
  
  for(let left = 0; left < str.length; left++) {
    let seenChars = {}, currentLength = 0;
    for(let right = left; right < str.length; right++) {
      let currentChar = str[right]

      if(!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength)
      }else {
        break;
      }
    }
  }
  return longest;
}
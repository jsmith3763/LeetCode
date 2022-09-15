/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(string) {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
      if (string[start] !== string[end]) {
          return validSubPalindrome(string, start + 1, end) || validSubPalindrome(string, start, end - 1);
      }
      start++;
      end--;
  }
  return true;
};

var validSubPalindrome = function(string, start, end) {
  while (start < end) {
      if (string[start] !== string[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
};

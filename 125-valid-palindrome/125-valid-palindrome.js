/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(string) {
  string = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let leftPointer = 0, rightPointer = string.length - 1;
  while (leftPointer < rightPointer) {
    if (string[leftPointer] !== string[rightPointer]) {
      return false;
    } 
    leftPointer++
    rightPointer--
  }
  return true;
}
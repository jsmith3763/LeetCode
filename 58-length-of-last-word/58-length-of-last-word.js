/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let rightPointer = trimmedString.length - 1;
    let count = 0;
    
    while(rightPointer >= 0 && trimmedString[rightPointer] != ' ') {
        rightPointer--
        count++
    }
    
    return count;
};
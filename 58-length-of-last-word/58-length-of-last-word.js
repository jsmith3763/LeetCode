/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let rightPointer = trimmedString.length - 1;
    let count = 0;
    
    for(rightPointer; rightPointer >= 0; rightPointer--) {
        if(trimmedString[rightPointer] == ' ') {
            break;
        }
        
        count++
    }
    
    return count;
};
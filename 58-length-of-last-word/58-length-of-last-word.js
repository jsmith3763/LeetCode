/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let rightPointer = trimmedString.length - 1;
    let count = 0;
    console.log(trimmedString)
    
    for(let i = rightPointer; i >= 0; i--) {
        if(trimmedString[i] == ' ') {
            break;
        }
        
        count++
    }
    
    return count;
};
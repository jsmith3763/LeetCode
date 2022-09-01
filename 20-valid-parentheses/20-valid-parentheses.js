/**
 * @param {string} s
 * @return {boolean}
 */

const correctParenthesesPairs = {
    "(": ")",
    "{": "}",
    "[": "]"
}
var isValid = function(stringOfParentheses) {
    if (stringOfParentheses.length === 0)  return true 
    
    const stack = []
    
    for(let index = 0; index < stringOfParentheses.length; index++) {
        if(correctParenthesesPairs[stringOfParentheses[index]]) {
            stack.push(stringOfParentheses[index])
        }else {
            let leftParentheses = stack.pop()
            let correctRightParentheses = correctParenthesesPairs[leftParentheses]
            if(stringOfParentheses[index] !== correctRightParentheses) return false
        }
    }
    
    return stack.length === 0
    
};
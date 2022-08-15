/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const returnArr = [];
    for(let i = 1; i <= n; i++) {
        if(i % 15 === 0) {
            returnArr.push("FizzBuzz");
        }else if(i % 5 === 0) {
            returnArr.push("Buzz")
        }else if(i % 3 === 0) {
            returnArr.push("Fizz");
        }else {
            returnArr.push(i.toString());
        }
    }
    return returnArr;
};
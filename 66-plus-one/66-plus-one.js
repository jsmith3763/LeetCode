/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let rightPointer = digits.length - 1;
    let val = 0;
    let carry = 1;
    while(rightPointer >= 0 && carry) {
        val = digits[rightPointer] + carry;
        carry = Math.floor(val / 10);
        digits[rightPointer] = val % 10;
        rightPointer--
    }
    if(carry) digits.unshift(carry);
    return digits
}
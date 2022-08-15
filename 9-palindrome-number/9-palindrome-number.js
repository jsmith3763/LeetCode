/**
 * @param {number} x
 * @return {boolean}
 */
let arr = [];
var isPalindrome = function (x) {
    if (typeof x === 'number') {
        const func = num => Number(num);
        arr = Array.from(String(x), func);
    } else {
        arr = x.split("");
    }

    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i], arr[j])
        if (arr[i] !== arr[j]) {
            return false;
        }
        j--;
    } return true;
};
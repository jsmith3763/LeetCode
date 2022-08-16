/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let returnnums = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let targetNum = target - nums[i];
        if (map.has(targetNum)) {
            returnnums.push(map.get(targetNum));
            returnnums.push(i);
            return returnnums;
        }
        map.set(currentNum, i);
        
    }
    return false;
}
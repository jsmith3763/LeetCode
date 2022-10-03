/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsObj = {}

  for (let p = 0; p < nums.length; p++) {
    let currentVal = numsObj[nums[p]]
    
    if (currentVal >= 0) {
      return [currentVal, p]
    } else {
      let numToFind = target - nums[p]
      numsObj[numToFind] = p;
    }
  }
  return null;
}
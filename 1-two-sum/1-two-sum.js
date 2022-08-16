/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsToFind = {}

  for (let p1 = 0; p1 < nums.length; p1++) {
    let numToFind = target - nums[p1];
    
    if (numToFind in numsToFind) {
      let returnArr = [];
      returnArr.push(numsToFind[numToFind], p1);
      return returnArr;
    }

    numsToFind[nums[p1]] = p1
  }
  return null;
}

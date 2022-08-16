/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const numsToFind = {}

  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    
    if (numToFind in numsToFind) {
      const returnArr = [];
      returnArr.push(numsToFind[numToFind], p1);
      return returnArr;
    }

    numsToFind[nums[p1]] = p1
  }
  return null;
}
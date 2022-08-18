/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (arr) => {
  let maxArea = 0
  let p1 = 0
  let p2 = arr.length - 1
  while(p1 < p2) {
    let height = Math.min(arr[p1], arr[p2])
    let width = p2 - p1
    let area = height * width
    maxArea = Math.max(maxArea, area)

    if(height == arr[p1]) {
      p1++
    }else {
      p2--
    }
  }
  return maxArea
}
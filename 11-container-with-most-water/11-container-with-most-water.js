/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(arr) {
    // p1 and p2 - first and ending elems
    let p1 = 0
    let p2 = arr.length - 1
    let maxArea = 0
    // while p1 < p2
    while (p1 < p2) {
        const height = Math.min(arr[p1], arr[p2])
        const width = p2 - p1
        const area = height * width
        maxArea = Math.max(area, maxArea)

        console.log(height + " x " + width + " = " + area);

        if (arr[p1] <= arr[p2]) {
            p1++
        } else {
            p2--
        }
    }
    return maxArea
}